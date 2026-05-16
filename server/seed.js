require('dotenv').config();
const mongoose = require('mongoose');
const AdminUser = require('./models/AdminUser');
const Service = require('./models/Service');
const Partner = require('./models/Partner');
const SiteContent = require('./models/SiteContent');

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
    shortDescription: 'Premium interior and exterior painting for homes, with meticulous surface preparation and expert color guidance.',
    longDescription: 'Our residential painting service delivers exceptional quality finishes for homes of all sizes. From comprehensive surface preparation to final inspection, every detail is managed with precision and care.',
    features: ['Interior painting', 'Exterior painting', 'Color consultation', 'Surface preparation', 'Quality inspection'],
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

const partners = [
  { name: 'Coral Paints', order: 1 },
  { name: 'Dulux', order: 2 },
  { name: 'Archxenus', order: 3 },
  { name: 'Habikon', order: 4 },
  { name: 'Sugru', order: 5 },
  { name: 'Edd McCray', order: 6 },
  { name: 'MELYTAS', order: 7 },
];

const siteContent = [
  {
    section: 'hero',
    data: {
      headline: 'We Help Clients Achieve Better Painting Outcomes Through Structure, Supervision, and Quality Control',
      subheadline: 'We don\'t just paint — we guide clients on what to use, how much to use, and how to achieve better results.',
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
  {
    section: 'whyUs',
    data: {
      headline: 'Why Clients Choose Us',
      points: [
        { number: '01', title: 'Structured Process', description: 'Every project follows a rigorous process from site assessment through final inspection. No shortcuts. No compromises.' },
        { number: '02', title: 'Expert Supervision', description: 'Our experienced supervisors oversee every phase of your project, ensuring consistent quality from start to finish.' },
        { number: '03', title: 'Quality Control', description: 'We implement multi-stage quality checks and use only premium, specification-appropriate products for every surface.' },
        { number: '04', title: 'Client Education', description: 'We help clients understand what products to use, why, and how — building long-term relationships based on trust and knowledge.' },
        { number: '05', title: 'Transparent Pricing', description: 'Clear, detailed quotations with no hidden costs. You know exactly what you\'re getting and what you\'re paying for.' },
        { number: '06', title: 'Trained Professionals', description: 'Our team undergoes continuous training, staying current with industry best practices, products, and techniques.' },
      ]
    }
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Service.deleteMany({});
    await Partner.deleteMany({});
    await SiteContent.deleteMany({});
    await AdminUser.deleteMany({});

    // Seed services
    await Service.insertMany(services);
    console.log('✓ Services seeded');

    // Seed partners
    await Partner.insertMany(partners);
    console.log('✓ Partners seeded');

    // Seed site content
    for (const content of siteContent) {
      await SiteContent.create(content);
    }
    console.log('✓ Site content seeded');

    // Create admin user
    const admin = new AdminUser({
      email: process.env.ADMIN_EMAIL || 'admin@ambiencevista.com',
      password: process.env.ADMIN_PASSWORD || 'AdminVista2024!',
      name: 'Ambience Vista Admin',
      role: 'superadmin'
    });
    await admin.save();
    console.log('✓ Admin user created');

    console.log('\n✅ Database seeded successfully!');
    console.log(`Admin login: ${process.env.ADMIN_EMAIL || 'admin@ambiencevista.com'}`);
    process.exit(0);
  } catch (error) {
    console.error('Seed error:', error);
    process.exit(1);
  }
}

seed();
