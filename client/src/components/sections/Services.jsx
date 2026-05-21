import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer, defaultViewport } from '../../lib/animations';
import { Plus, Minus, Brush, Home, Building2, Wrench, Layers, Search } from 'lucide-react';

import procurementImg from '../../assets/presentation.jpeg';
import residentialImg from '../../assets/room.jpeg';
import commercialImg from '../../assets/building.jpeg';
import projectImg from '../../assets/site2.jpeg';
import prepImg from '../../assets/roller technique training.jpeg';
import advisoryImg from '../../assets/color wheel painting.jpeg';

const services = [
  {
    id: 1, icon: Search,
    title: 'Paint Advisory & Procurement Support',
    short: 'Expert guidance on the right paints, quantities, and procurement strategies to reduce waste and achieve optimal results.',
    long: 'We provide comprehensive advisory on paint selection, specifications, and procurement. Our experts guide product selection, quantity calculation, and supplier negotiations to ensure quality while optimizing your budget. Stop guessing — let data and expertise drive your paint decisions.',
    features: ['Paint specification consulting', 'Quantity estimation & optimization', 'Supplier recommendations', 'Budget optimization strategies', 'Quality verification & testing'],
    image: procurementImg,
  },
  {
    id: 2, icon: Home,
    title: 'Residential Painting',
    short: 'Premium interior and exterior painting for homes, with meticulous surface preparation and expert colour guidance.',
    long: 'Our residential painting service delivers exceptional quality finishes for homes of all sizes. From comprehensive surface preparation to final inspection, every detail is managed with precision and care. We treat every home as if it were our own.',
    features: ['Interior painting', 'Exterior painting', 'Colour consultation', 'Surface preparation', 'Quality inspection & handover'],
    image: residentialImg,
  },
  {
    id: 3, icon: Building2,
    title: 'Commercial Painting',
    short: 'Large-scale commercial painting with minimal operational disruption and strict quality control throughout.',
    long: 'We handle commercial painting projects with the professionalism and scale required by businesses. Our team works around your schedule to minimize disruption while delivering superior results that reflect well on your brand.',
    features: ['Office buildings', 'Retail spaces', 'Industrial facilities', 'Schedule flexibility', 'Project management & reporting'],
    image: commercialImg,
  },
  {
    id: 4, icon: Brush,
    title: 'Project-Based Painting Support',
    short: 'End-to-end painting supervision for construction projects, developers, and facility managers.',
    long: 'For developers and construction managers, we provide dedicated painting supervision throughout the project lifecycle. We ensure quality standards are maintained at every phase, from primer to finish coat, and provide detailed progress reports.',
    features: ['Full project supervision', 'Milestone inspections', 'Subcontractor management', 'Progress reporting', 'Snagging & defect resolution'],
    image: projectImg,
  },
  {
    id: 5, icon: Layers,
    title: 'Surface Preparation & Finishing',
    short: 'Professional surface preparation — the critical foundation of every lasting, beautiful paint job.',
    long: 'Great paint jobs begin with impeccable surface preparation. We specialize in wall repair, filling, sanding, priming, and all preparation work that ensures paint adheres correctly, looks perfect, and lasts for years without premature failure.',
    features: ['Wall repair & filling', 'Sanding & smoothing', 'Priming & sealing', 'Skim coating', 'Texture application & matching'],
    image: prepImg,
  },
  {
    id: 6, icon: Wrench,
    title: 'Site Assessment & Paint Advisory',
    short: 'Comprehensive on-site assessments to diagnose surface conditions and prescribe the optimal solution.',
    long: 'Before any brush touches a wall, we assess your site thoroughly. Our diagnostic process identifies surface issues, environmental factors, and existing paint conditions to recommend the most effective treatment plan — saving you time and money.',
    features: ['Surface condition diagnosis', 'Environmental assessment', 'Existing paint analysis', 'Written treatment plan', 'Cost-benefit advisory'],
    image: advisoryImg,
  },
];

function ServiceRow({ service, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      style={{ borderTop: '1px solid var(--border)' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      {/* Collapsed row */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left"
        style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', padding: '1.75rem 0', alignItems: 'center' }}
        id={`service-row-${service.id}`}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '2.5rem 1fr', gap: '2rem', alignItems: 'center' }}>
          <span className="overline-accent" style={{ paddingTop: '2px' }}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3
            className="font-display"
            style={{ fontSize: 'clamp(1.15rem,2vw,1.6rem)', fontWeight: 400, color: 'var(--text-primary)', lineHeight: 1.2 }}
          >
            {service.title}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ flexShrink: 0, color: open ? 'var(--accent)' : 'var(--text-muted)' }}
        >
          <Plus size={18} strokeWidth={1.5} />
        </motion.div>
      </button>

      {/* Expanded panel */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div
              className="pb-12"
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}
            >
              {/* Left: text */}
              <div style={{ paddingLeft: 'calc(2.5rem + 2rem)' }}>
                <p className="body-editorial mb-6">{service.long}</p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}
                    >
                      <span style={{ width: '1.5rem', height: '1px', background: 'var(--accent)', flexShrink: 0, marginTop: '0.6rem' }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-ghost"
                >
                  Request This Service
                </button>
              </div>

              {/* Right: image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/10', alignSelf: 'start' }}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="img-cover img-hover"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="container-site">

        {/* Header */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <motion.div
            className="lg:col-span-6"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
          >
            <div className="overline-row mb-6">
              <span className="overline">What We Do</span>
            </div>
            <h2 className="text-editorial-xl" style={{ color: 'var(--text-primary)' }}>
              Our Services
            </h2>
          </motion.div>
          <motion.div
            className="lg:col-span-5 lg:col-start-8 flex items-end"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.7, delay: 0.2 } } }}
          >
            <p className="body-editorial">
              From residential homes to large-scale commercial developments, we deliver structured, supervised painting solutions tailored to every project.
            </p>
          </motion.div>
        </motion.div>

        {/* Accordion rows */}
        <div>
          {services.map((s, i) => (
            <ServiceRow key={s.id} service={s} index={i} />
          ))}
          <div className="rule" />
        </div>
      </div>
    </section>
  );
}
