import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, blurUp, staggerContainer, fastStagger, defaultViewport } from '../../lib/animations';
import { ChevronDown, Brush, Home, Building2, Wrench, Layers, Search, CheckCircle2 } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Search,
    title: 'Paint Advisory & Procurement',
    short: 'Expert guidance on the right paints, quantities, and procurement strategies to reduce waste and achieve optimal results.',
    long: 'We provide comprehensive advisory on paint selection, specifications, and procurement. Our experts guide product selection, quantity calculation, and supplier negotiations to ensure quality while optimizing your budget.',
    features: ['Paint specification consulting', 'Quantity estimation & optimization', 'Supplier recommendations', 'Budget optimization', 'Quality verification'],
    image: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    icon: Home,
    title: 'Residential Painting',
    short: 'Premium interior and exterior painting for homes, with meticulous surface preparation and expert colour guidance.',
    long: 'Our residential service delivers exceptional finishes for homes of all sizes. From surface preparation to final inspection, every detail is managed with precision. We treat every home as our own.',
    features: ['Interior painting', 'Exterior painting', 'Colour consultation', 'Surface preparation', 'Quality inspection & handover'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    icon: Building2,
    title: 'Commercial Painting',
    short: 'Large-scale commercial painting with minimal operational disruption and strict quality control throughout.',
    long: 'We handle commercial projects with the professionalism and scale required by businesses. Our team works around your schedule to minimize disruption while delivering results that reflect well on your brand.',
    features: ['Office buildings', 'Retail spaces', 'Industrial facilities', 'Schedule flexibility', 'Project management & reporting'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    icon: Brush,
    title: 'Project-Based Support',
    short: 'End-to-end painting supervision for construction projects, developers, and facility managers.',
    long: 'For developers and construction managers, we provide dedicated painting supervision throughout the project lifecycle, ensuring quality standards at every phase with detailed progress reports.',
    features: ['Full project supervision', 'Milestone inspections', 'Subcontractor management', 'Progress reporting', 'Snagging & defect resolution'],
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    icon: Layers,
    title: 'Surface Preparation',
    short: 'Professional surface preparation — the critical foundation of every lasting, beautiful paint job.',
    long: 'Great paint jobs begin with flawless preparation. We specialize in wall repair, filling, sanding, priming, and all preparation work that ensures paint adheres correctly and lasts for years.',
    features: ['Wall repair & filling', 'Sanding & smoothing', 'Priming & sealing', 'Skim coating', 'Texture application & matching'],
    image: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    icon: Wrench,
    title: 'Site Assessment',
    short: 'Comprehensive on-site assessments to diagnose surface conditions and prescribe the optimal solution.',
    long: 'Before any brush touches a wall, we assess your site thoroughly. Our diagnostic process identifies surface issues, environmental factors, and existing paint conditions to recommend the most effective treatment plan.',
    features: ['Surface condition diagnosis', 'Environmental assessment', 'Existing paint analysis', 'Written treatment plan', 'Cost-benefit advisory'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
  },
];

function ServiceCard({ service, index }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      className="group flex flex-col rounded-2xl border"
      style={{
        background: 'var(--bg-card)',
        borderColor: 'var(--border)',
        /* No overflow:hidden on the card wrapper — prevents "Learn More" clipping */
      }}
      variants={blurUp}
      transition={{ delay: index * 0.07 }}
      whileHover={{ y: -5, boxShadow: '0 20px 56px rgba(240,120,64,0.13)', borderColor: 'var(--accent-light)', transition: { duration: 0.3 } }}
    >
      {/* Image — overflow hidden scoped only to the image container */}
      <div
        className="relative flex-shrink-0 rounded-t-2xl overflow-hidden"
        style={{ height: '196px' }}
      >
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, transparent 45%, rgba(28,28,26,0.55) 100%)' }}
        />
        {/* Icon badge */}
        <div
          className="absolute bottom-4 left-4 w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: 'var(--accent)' }}
        >
          <Icon size={16} color="#fff" strokeWidth={2} />
        </div>
      </div>

      {/* Card body — no overflow hidden here, flex-col, padding all sides */}
      <div className="flex flex-col flex-1 p-6">

        {/* Title */}
        <h3
          className="font-semibold text-base leading-snug mb-3"
          style={{ color: 'var(--text-primary)' }}
        >
          {service.title}
        </h3>

        {/* Short description */}
        <p
          className="text-sm leading-relaxed flex-1 mb-5"
          style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}
        >
          {service.short}
        </p>

        {/* Divider */}
        <div className="h-px w-full mb-5" style={{ background: 'var(--border)' }} />

        {/* Expand toggle — always visible, never clipped */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase transition-colors w-fit"
          style={{ color: 'var(--accent)' }}
          id={`service-toggle-${service.id}`}
        >
          {expanded ? 'Show Less' : 'Learn More'}
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.28 }}
            style={{ display: 'flex' }}
          >
            <ChevronDown size={13} strokeWidth={2.5} />
          </motion.span>
        </button>

        {/* Expanded panel */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="expanded"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <div className="pt-5 mt-5" style={{ borderTop: '1px solid var(--border)' }}>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}
                >
                  {service.long}
                </p>
                <ul className="space-y-2.5 mb-6">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      <CheckCircle2
                        size={14}
                        style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '3px' }}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => {
                    const el = document.querySelector('#contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-primary text-xs py-3 px-5"
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
          className="max-w-2xl mb-14"
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
            className="text-base leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
            variants={fadeInUp}
          >
            From residential homes to large-scale commercial developments, we deliver structured,
            supervised painting solutions tailored to every project.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
          variants={fastStagger}
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
