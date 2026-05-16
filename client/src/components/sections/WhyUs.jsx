import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, defaultViewport } from '../../lib/animations';

const reasons = [
  {
    number: '01',
    title: 'Structured Process',
    description: 'Every project follows a rigorous process from site assessment through final inspection. No shortcuts. No compromises on quality at any stage.',
  },
  {
    number: '02',
    title: 'Expert Supervision',
    description: 'Our experienced supervisors oversee every phase of your project, ensuring consistent quality from surface preparation through to final coat.',
  },
  {
    number: '03',
    title: 'Proven Quality Control',
    description: 'We implement multi-stage quality checks and use only premium, specification-appropriate products suited to each specific surface and environment.',
  },
  {
    number: '04',
    title: 'Client Education',
    description: 'We help clients understand what products to use, why, and how — building long-term relationships based on trust, transparency, and knowledge.',
  },
  {
    number: '05',
    title: 'Transparent Pricing',
    description: 'Clear, detailed quotations with no hidden costs. You know exactly what you\'re getting and what you\'re paying for — before work begins.',
  },
  {
    number: '06',
    title: 'Continuous Training',
    description: 'Our team undergoes regular training, staying current with industry best practices, new product formulations, and advanced application techniques.',
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
          className="max-w-2xl mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <motion.div className="section-label" variants={fadeInUp}>
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
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: 'rgba(255,255,255,0.06)' }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {reasons.map((r, i) => (
            <motion.div
              key={r.number}
              className="p-8 group cursor-default"
              style={{ background: 'var(--bg-dark)' }}
              variants={fadeInUp}
              transition={{ delay: i * 0.08 }}
              whileHover={{ background: '#242420' }}
            >
              <div className="flex items-start justify-between mb-6">
                <span
                  className="font-display text-5xl font-light leading-none"
                  style={{ color: 'rgba(255,255,255,0.08)' }}
                >
                  {r.number}
                </span>
                <motion.div
                  className="w-8 h-px mt-6"
                  style={{ background: 'var(--accent)' }}
                  initial={{ width: '2rem' }}
                  whileHover={{ width: '4rem' }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <h3
                className="font-medium text-lg mb-3 transition-colors duration-300 group-hover:text-amber-400"
                style={{ color: '#fff' }}
              >
                {r.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {r.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
