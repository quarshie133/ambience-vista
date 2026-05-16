import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer, defaultViewport } from '../../lib/animations';
import { ChevronDown, Brush, Home, Building2, Wrench, Layers, Search } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Search,
    title: 'Paint Advisory & Procurement Support',
    short: 'Expert guidance on the right paints, quantities, and procurement strategies to avoid waste and achieve optimal results.',
    long: 'We provide comprehensive advisory on paint selection, specifications, and procurement. Our experts guide you through product selection, quantity calculation, and supplier negotiations to ensure quality while optimizing your budget. Stop guessing — let data and expertise drive your paint decisions.',
    features: ['Paint specification consulting', 'Quantity estimation & optimization', 'Supplier recommendations', 'Budget optimization strategies', 'Quality verification & testing'],
    image: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    icon: Home,
    title: 'Residential Painting',
    short: 'Premium interior and exterior painting for homes, with meticulous surface preparation and expert colour guidance.',
    long: 'Our residential painting service delivers exceptional quality finishes for homes of all sizes. From comprehensive surface preparation to final inspection, every detail is managed with precision and care. We treat every home as if it were our own.',
    features: ['Interior painting', 'Exterior painting', 'Colour consultation', 'Surface preparation', 'Quality inspection & handover'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    icon: Building2,
    title: 'Commercial Painting',
    short: 'Large-scale commercial painting with minimal disruption to operations and strict quality control standards.',
    long: 'We handle commercial painting projects with the professionalism and scale required by businesses. Our team works around your schedule to minimize disruption while delivering superior results that reflect well on your brand.',
    features: ['Office buildings', 'Retail spaces', 'Industrial facilities', 'Schedule flexibility', 'Project management & reporting'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    icon: Brush,
    title: 'Project-Based Painting Support',
    short: 'End-to-end painting supervision for construction projects, developers, and facility managers.',
    long: 'For developers and construction managers, we provide dedicated painting supervision throughout the project lifecycle. We ensure quality standards are maintained at every phase, from primer to finish coat, and provide detailed progress reports.',
    features: ['Full project supervision', 'Milestone inspections', 'Subcontractor management', 'Progress reporting', 'Snagging & defect resolution'],
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    icon: Layers,
    title: 'Surface Preparation & Finishing',
    short: 'Professional surface preparation — the foundation of a lasting, beautiful paint job.',
    long: 'Great paint jobs begin with impeccable surface preparation. We specialize in wall repair, filling, sanding, priming, and all preparation work that ensures paint adheres correctly, looks perfect, and lasts for years without premature failure.',
    features: ['Wall repair & filling', 'Sanding & smoothing', 'Priming & sealing', 'Skim coating', 'Texture application & matching'],
    image: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    icon: Wrench,
    title: 'Site Assessment & Paint Advisory',
    short: 'Comprehensive on-site assessments to diagnose surface conditions and prescribe the optimal solution.',
    long: 'Before any brush touches a wall, we assess your site thoroughly. Our diagnostic process identifies surface issues, environmental factors, and existing paint conditions to recommend the most effective treatment plan — saving you time and money.',
    features: ['Surface condition diagnosis', 'Environmental assessment', 'Existing paint analysis', 'Written treatment plan', 'Cost-benefit advisory'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
  },
];

function ServiceCard({ service, index }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      className="rounded-xl overflow-hidden border group"
      style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
      variants={fadeInUp}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(28,28,26,0.7) 100%)' }} />
        <div
          className="absolute bottom-4 left-4 w-10 h-10 rounded-full flex items-center justify-center"
          style={{ background: 'var(--accent)' }}
        >
          <Icon size={18} color="#fff" />
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="font-medium text-lg mb-3 leading-snug" style={{ color: 'var(--text-primary)' }}>
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
          {service.short}
        </p>

        {/* Expand button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-xs font-medium tracking-wide transition-colors"
          style={{ color: 'var(--accent)' }}
        >
          {expanded ? 'Show Less' : 'Learn More'}
          <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown size={14} />
          </motion.div>
        </button>

        {/* Expanded */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ overflow: 'hidden' }}
            >
              <div className="pt-4 mt-4" style={{ borderTop: '1px solid var(--border)' }}>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {service.long}
                </p>
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-primary)' }}>
                      <div className="w-4 h-px flex-shrink-0" style={{ background: 'var(--accent)' }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => {
                    const el = document.querySelector('#contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-primary mt-5 text-sm"
                >
                  Request This Service
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="section-padding" style={{ background: 'var(--bg-surface)' }}>
      <div className="container-site">
        {/* Header */}
        <motion.div
          className="max-w-2xl mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <motion.div className="section-label" variants={fadeInUp}>
            <span className="text-label">What We Do</span>
          </motion.div>
          <motion.h2
            className="text-display-lg font-display mb-5"
            style={{ color: 'var(--text-primary)' }}
            variants={fadeInUp}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-base"
            style={{ color: 'var(--text-secondary)' }}
            variants={fadeInUp}
          >
            From residential homes to large-scale commercial developments, we deliver structured, supervised painting solutions tailored to every project's needs.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
