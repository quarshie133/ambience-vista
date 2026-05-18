// seed.js — ES Module version (matches "type":"module" in package.json)
import 'dotenv/config';
import mongoose from 'mongoose';
import AdminUser from './models/AdminUser.js';
import Service from './models/Service.js';
import Partner from './models/Partner.js';
import SiteContent from './models/SiteContent.js';

const services = [
  {
    title: 'Paint Advisory & Procurement Support',
    shortDescription: 'Expert guidance on the right paints, quantities, and procurement strategies to avoid waste and achieve optimal results.',
    longDescription: 'We provide comprehensive advisory on paint selection, specifications, and procurement. Our experts guide you through product selection, quantity calculation, and supplier negotiations to ensure quality while optimizing your budget.',
    features: ['Paint specification consulting', 'Quantity estimation', 'Supplier recommendations', 'Budget optimization', 'Quality verification'],
    order: 1,
  },
  {
    title: 'Residential Painting',
    shortDescription: 'Premium interior and exterior painting for homes, with meticulous surface preparation and expert colour guidance.',
    longDescription: 'Our residential painting service delivers exceptional quality finishes for homes of all sizes. From comprehensive surface preparation to final inspection, every detail is managed with precision and care.',
    features: ['Interior painting', 'Exterior painting', 'Colour consultation', 'Surface preparation', 'Quality inspection'],
    order: 2,
  },
  {
    title: 'Commercial Painting',
    shortDescription: 'Large-scale commercial painting solutions with minimal disruption to operations and strict quality control standards.',
    longDescription: 'We handle commercial painting projects with the professionalism and scale required by businesses. Our team works around your schedule to minimize disruption while delivering superior results.',
    features: ['Office buildings', 'Retail spaces', 'Industrial facilities', 'Schedule flexibility', 'Project management'],
    order: 3,
  },
  {
    title: 'Project-Based Painting Support',
    shortDescription: 'End-to-end painting supervision and support for construction projects, developers, and facility managers.',
    longDescription: 'For developers and construction managers, we provide dedicated painting supervision throughout the project lifecycle. We ensure quality standards are maintained at every phase, from primer to finish coat.',
    features: ['Full project supervision', 'Milestone inspections', 'Subcontractor management', 'Progress reporting', 'Quality assurance'],
    order: 4,
  },
  {
    title: 'Surface Preparation & Finishing',
    shortDescription: 'Professional surface preparation including filling, sanding, and priming — the foundation of a lasting paint job.',
    longDescription: 'Great paint jobs begin with impeccable surface preparation. We specialize in wall repair, filling, sanding, priming, and all preparation work that ensures paint adheres correctly and lasts for years.',
    features: ['Wall repair & filling', 'Sanding & smoothing', 'Priming & sealing', 'Skim coating', 'Texture application'],
    order: 5,
  },
  {
    title: 'Site Assessment & Paint Advisory',
    shortDescription: 'Comprehensive on-site assessments to diagnose surface conditions and prescribe the optimal painting solution.',
    longDescription: 'Before any brush touches a wall, we assess your site thoroughly. Our diagnostic process identifies surface issues, environmental factors, and existing paint conditions to recommend the most effective treatment plan.',
    features: ['Surface condition diagnosis', 'Environmental assessment', 'Existing paint analysis', 'Treatment plan', 'Written report'],
    order: 6,
  },
];

// B — Real partners from spec
const partners = [
  { name: 'Coral Paints',  website: 'https://www.coral.com',    order: 1 },
  { name: 'Dulux',         website: 'https://www.dulux.com',    order: 2 },
  { name: 'Archxenus',     website: '#',                        order: 3 },
  { name: 'Habikon',       website: '#',                        order: 4 },
  { name: 'Sugru',         website: 'https://www.sugru.com',    order: 5 },
  { name: 'Edd McCray',    website: '#',                        order: 6 },
  { name: 'MELYTAS',       website: '#',                        order: 7 },
];

const siteContent = [
  {
    section: 'hero',
    data: {
      headline: 'We Help Clients Achieve Better Painting Outcomes Through Structure, Supervision, and Quality Control',
      subheadline: "We don't just paint — we guide clients on what to use, how much to use, and how to achieve better results.",
      ctaPrimary: 'Request a Site Assessment',
      ctaSecondary: 'View Our Services',
    }
  },
  {
    section: 'about',
    data: {
      headline: 'Redefining Painting Standards in Ghana',
      story: 'Ambience Vista is a professional painting company committed to delivering structured, supervised, and quality-controlled painting services across Ghana. We combine deep industry expertise with a client-first approach to ensure every project exceeds expectations.',
      mission: 'To bring international painting standards to the Ghanaian market while creating meaningful employment and training opportunities for young professionals.',
      founded: '2018',
      projects: '200+',
      clients: '150+',
      experience: '6+',
    }
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB Atlas');

    // Clear existing data
    await Service.deleteMany({});
    await Partner.deleteMany({});
    await SiteContent.deleteMany({});
    await AdminUser.deleteMany({});
    console.log('🗑️  Cleared existing data');

    // Seed services
    await Service.insertMany(services);
    console.log('✅ 6 Services seeded');

    // Seed partners (all 7 from spec)
    await Partner.insertMany(partners);
    console.log('✅ 7 Partners seeded: Coral Paints, Dulux, Archxenus, Habikon, Sugru, Edd McCray, MELYTAS');

    // Seed site content
    for (const content of siteContent) {
      await SiteContent.create(content);
    }
    console.log('✅ Site content seeded');

    // Create admin user
    const admin = new AdminUser({
      email: process.env.ADMIN_EMAIL || 'admin@ambiencevista.com',
      password: process.env.ADMIN_PASSWORD || 'AdminVista2024!',
      name: 'Ambience Vista Admin',
      role: 'superadmin'
    });
    await admin.save();
    console.log(`✅ Admin user created: ${process.env.ADMIN_EMAIL || 'admin@ambiencevista.com'}`);

    console.log('\n🎉 Atlas database seeded successfully!');
    console.log(`\n📊 Admin login:`);
    console.log(`   Email:    ${process.env.ADMIN_EMAIL || 'admin@ambiencevista.com'}`);
    console.log(`   Password: ${process.env.ADMIN_PASSWORD || 'AdminVista2024!'}`);
    console.log(`   URL:      http://localhost:5000/admin\n`);
    process.exit(0);
  } catch (error) {
    console.error('❌ Seed error:', error.message);
    process.exit(1);
  }
}

seed();
