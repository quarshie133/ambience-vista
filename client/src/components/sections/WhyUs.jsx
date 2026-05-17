import { motion } from 'framer-motion';
import { fadeInUp, blurUp, staggerContainer, fastStagger, drawLine, defaultViewport } from '../../lib/animations';

const reasons = [
  {
    number: '01',
    title: 'Structured Process',
    description: 'Every project follows a rigorous methodology from site assessment through final inspection — no shortcuts, no compromises.',
  },
  {
    number: '02',
    title: 'Expert Supervision',
    description: 'Experienced supervisors oversee every phase, ensuring consistent quality from surface preparation to final coat.',
  },
  {
    number: '03',
    title: 'Proven Quality Control',
    description: 'Multi-stage quality checks and premium, specification-appropriate products — suited to each surface and environment.',
  },
  {
    number: '04',
    title: 'Client Education',
    description: 'We help clients understand what products to use, why, and how — building long-term trust through transparency.',
  },
  {
    number: '05',
    title: 'Transparent Pricing',
    description: 'Clear, detailed quotations with zero hidden costs. You know exactly what you are getting before work begins.',
  },
  {
    number: '06',
    title: 'Continuous Training',
    description: 'Our team stays current with best practices, new formulations, and advanced application techniques through regular training.',
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="section-padding"
      style={{ background: 'var(--bg-dark)' }}
    >
      <div className="container-site">
        {/* Header */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <div className="max-w-xl">
            <motion.div className="section-label mb-4" variants={fadeInUp}>
              <span className="text-label" style={{ color: 'var(--accent-light)' }}>
                The Ambience Difference
              </span>
            </motion.div>
            <motion.h2
              className="text-display-lg font-display"
              style={{ color: '#fff' }}
              variants={fadeInUp}
            >
              Why Clients Choose Us
            </motion.h2>
          </div>
          <motion.p
            className="text-sm max-w-xs leading-relaxed lg:text-right"
            style={{ color: 'rgba(255,255,255,0.45)' }}
            variants={fadeInUp}
          >
            Six reasons our clients return — and refer us to others.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
          }}
          variants={fastStagger}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {reasons.map((r, i) => (
            <motion.div
              key={r.number}
              className="group relative flex flex-col p-8 cursor-default"
              style={{
                background: 'transparent',
                borderRight: i % 3 !== 2 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                minHeight: '220px',
              }}
              variants={blurUp}
              whileHover={{
                background: 'rgba(240,120,64,0.05)',
                transition: { duration: 0.3 },
              }}
            >
              {/* Animated accent corner on hover */}
              <motion.div
                className="absolute top-0 left-0 h-px"
                style={{ background: 'var(--accent)', width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* Number */}
              <span
                className="font-display text-6xl font-light leading-none mb-6 block"
                style={{ color: 'rgba(255,255,255,0.06)' }}
              >
                {r.number}
              </span>

              {/* Title */}
              <h3
                className="font-medium text-base mb-3 leading-snug transition-colors duration-300"
                style={{ color: '#fff' }}
              >
                {r.title}
              </h3>

              {/* Divider */}
              <motion.div
                className="h-px w-8 mb-4 flex-shrink-0"
                style={{ background: 'var(--accent)', originX: 0 }}
                variants={drawLine}
              />

              {/* Description */}
              <p
                className="text-sm leading-relaxed mt-auto"
                style={{ color: 'rgba(255,255,255,0.48)' }}
              >
                {r.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
