import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import rateLimit from 'express-rate-limit';

// ─── Models ───────────────────────────────────────────────────────────────────
import Service from './models/Service.js';
import GalleryImage from './models/GalleryImage.js';
import Partner from './models/Partner.js';
import ContactMessage from './models/ContactMessage.js';
import SiteContent from './models/SiteContent.js';
import AdminUser from './models/AdminUser.js';

// ─── Routes ───────────────────────────────────────────────────────────────────
import authRoutes from './routes/auth.js';
import contactRoutes from './routes/contact.js';
import serviceRoutes from './routes/services.js';
import galleryRoutes from './routes/gallery.js';
import partnerRoutes from './routes/partners.js';
import uploadRoutes from './routes/upload.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// ─── Security & Middleware ────────────────────────────────────────────────────
app.use(helmet({
  crossOriginEmbedderPolicy: false,
  contentSecurityPolicy: false,
}));
app.use(morgan('dev'));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP, please try again later.'
});
app.use('/api/', limiter);

app.use(cors({
  origin: [
    process.env.CLIENT_URL || 'http://localhost:5173',
    'http://localhost:5174',
    'http://localhost:3000',
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// ─── Content Route ────────────────────────────────────────────────────────────
app.get('/api/content/:section', async (req, res) => {
  try {
    const content = await SiteContent.findOne({ section: req.params.section });
    if (!content) return res.status(404).json({ success: false, message: 'Content not found' });
    res.json({ success: true, data: content.data });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// ─── Health Check ─────────────────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Ambience Vista API is running', 
    env: process.env.NODE_ENV,
    timestamp: new Date().toISOString()
  });
});

// ─── MongoDB Connection & AdminJS ─────────────────────────────────────────────
async function startServer() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 30000,
    });
    console.log('✅ MongoDB connected');

    // ─── AdminJS Setup ─────────────────────────────────────────────────────
    try {
      const { default: AdminJS }      = await import('adminjs');
      const { default: AdminJSExpress } = await import('@adminjs/express');
      // @adminjs/mongoose exports Resource & Database as named exports (not on default)
      const MongooseAdapter = await import('@adminjs/mongoose');
      const { Resource, Database } = MongooseAdapter;

      AdminJS.registerAdapter({ Resource, Database });

      const admin = new AdminJS({
        resources: [
          {
            resource: Service,
            options: {
              navigation: { name: 'Content', icon: 'Paint' },
              sort: { sortBy: 'order', direction: 'asc' },
              listProperties: ['title', 'shortDescription', 'order', 'isActive'],
              editProperties: ['title', 'shortDescription', 'longDescription', 'order', 'isActive'],
            }
          },
          {
            resource: GalleryImage,
            options: {
              navigation: { name: 'Content', icon: 'Image' },
              listProperties: ['alt', 'category', 'isFeatured', 'isActive', 'order'],
              editProperties: ['url', 'alt', 'caption', 'category', 'order', 'isActive', 'isFeatured'],
            }
          },
          {
            resource: Partner,
            options: {
              navigation: { name: 'Content', icon: 'Partnership' },
              listProperties: ['name', 'website', 'order', 'isActive'],
            }
          },
          {
            resource: ContactMessage,
            options: {
              navigation: { name: 'Messages', icon: 'Email' },
              actions: { new: { isVisible: false }, delete: { isVisible: true } },
              listProperties: ['name', 'email', 'service', 'status', 'createdAt'],
              editProperties: ['name', 'email', 'phone', 'service', 'message', 'status', 'adminNotes'],
            }
          },
          {
            resource: SiteContent,
            options: {
              navigation: { name: 'Content', icon: 'FileText' },
              listProperties: ['section', 'updatedAt'],
            }
          },
          {
            resource: AdminUser,
            options: {
              navigation: { name: 'Settings', icon: 'User' },
              listProperties: ['email', 'name', 'role', 'createdAt'],
              editProperties: ['email', 'name', 'role'],
              properties: {
                password: { isVisible: { list: false, edit: false, filter: false, show: false } }
              }
            }
          },
        ],
        branding: {
          companyName: 'Ambience Vista',
          logo: false,
          favicon: '/favicon.ico',
          theme: {
            colors: {
              primary100: '#F07840',
              primary80:  '#F9A07A',
              primary60:  '#FBB99B',
              love:       '#F07840',
            }
          }
        },
        dashboard: {
          handler: async () => {
            const serviceCount = await Service.countDocuments();
            const galleryCount = await GalleryImage.countDocuments();
            const partnerCount = await Partner.countDocuments();
            const messageCount = await ContactMessage.countDocuments();
            const newMessages = await ContactMessage.countDocuments({ status: 'new' });
            return { serviceCount, galleryCount, partnerCount, messageCount, newMessages };
          },
          component: false,
        },
        locale: {
          translations: {
            en: {
              labels: {
                Service: 'Services',
                GalleryImage: 'Gallery',
                Partner: 'Partners',
                ContactMessage: 'Messages',
                SiteContent: 'Site Content',
                AdminUser: 'Admin Users',
              }
            }
          }
        }
      });

      const adminRouter = AdminJSExpress.buildAuthenticatedRouter(admin, {
        authenticate: async (email, password) => {
          const user = await AdminUser.findOne({ email });
          if (user && await user.comparePassword(password)) {
            return { email: user.email, name: user.name };
          }
          return null;
        },
        cookiePassword: process.env.JWT_SECRET || 'cookie-secret-change-me',
      }, null, {
        resave: false,
        saveUninitialized: false,
        secret: process.env.JWT_SECRET || 'session-secret',
      });

      app.use(admin.options.rootPath, adminRouter);
      console.log(`✅ AdminJS ready at http://localhost:${process.env.PORT || 5000}${admin.options.rootPath}`);

      // ─── Body Parsers (Registered AFTER AdminJS Router) ────────────────────────
      app.use('/api', express.json({ limit: '10mb' }));
      app.use('/api', express.urlencoded({ extended: true, limit: '10mb' }));

      // ─── Static Files ─────────────────────────────────────────────────────────────
      app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

      // ─── API Routes ───────────────────────────────────────────────────────────────
      app.use('/api/auth', authRoutes);
      app.use('/api/contact', contactRoutes);
      app.use('/api/services', serviceRoutes);
      app.use('/api/gallery', galleryRoutes);
      app.use('/api/partners', partnerRoutes);
      app.use('/api/upload', uploadRoutes);
    } catch (adminError) {
      console.error('AdminJS setup error (non-fatal):', adminError.message);
      console.error(adminError);
    }

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
      console.log(`📊 Admin panel: http://localhost:${PORT}/admin`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
