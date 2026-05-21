import { motion } from 'framer-motion';
import { staggerContainer, defaultViewport } from '../../lib/animations';

const reasons = [
  { number: '01', title: 'Structured Process',   description: 'Every project follows a rigorous methodology from site assessment through final inspection. No shortcuts, no compromises at any stage.' },
  { number: '02', title: 'Expert Supervision',   description: 'Experienced supervisors oversee every phase, ensuring consistent quality from surface preparation to the final coat.' },
  { number: '03', title: 'Quality Control',      description: 'Multi-stage quality checks and premium, specification-appropriate products — suited to each surface and environment.' },
  { number: '04', title: 'Client Education',     description: 'We help clients understand what to use, why, and how — building long-term relationships based on trust and transparency.' },
  { number: '05', title: 'Transparent Pricing',  description: 'Clear, detailed quotations with zero hidden costs. You know exactly what you are getting before a single brush stroke.' },
  { number: '06', title: 'Continuous Training',  description: 'Our team stays current with industry best practices, new formulations, and advanced application techniques through regular training.' },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="section-padding" style={{ background: 'var(--bg-surface)' }}>
      <div className="container-site">

        {/* Header */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <motion.div
            className="lg:col-span-5"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
          >
            <div className="overline-row mb-6">
              <span className="overline">The Ambience Difference</span>
            </div>
            <h2 className="text-editorial-xl" style={{ color: 'var(--text-primary)' }}>
              Why Clients Choose Us
            </h2>
          </motion.div>
          <motion.div
            className="lg:col-span-5 lg:col-start-8 flex items-end"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.7, delay: 0.2 } } }}
          >
            <p className="body-editorial">
              Six reasons our clients keep coming back — and send others our way.
            </p>
          </motion.div>
        </motion.div>

        {/* Reasons — numbered editorial list (Studio McGee style: clean rows with dividers) */}
        <div>
          {reasons.map((r, i) => (
            <motion.div
              key={r.number}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 py-10 group cursor-default"
              style={{ borderTop: '1px solid var(--border)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
            >
              {/* Number */}
              <div className="md:col-span-1">
                <span
                  className="font-display"
                  style={{ fontSize: '0.875rem', color: 'var(--accent)', fontWeight: 400 }}
                >
                  {r.number}
                </span>
              </div>

              {/* Title */}
              <div className="md:col-span-4">
                <h3
                  className="font-display"
                  style={{ fontSize: 'clamp(1.2rem,2vw,1.65rem)', fontWeight: 400, color: 'var(--text-primary)', lineHeight: 1.2, transition: 'color 0.3s' }}
                >
                  {r.title}
                </h3>
              </div>

              {/* Description */}
              <div className="md:col-span-6 md:col-start-6">
                <p className="body-editorial" style={{ maxWidth: '500px' }}>
                  {r.description}
                </p>
              </div>

              {/* Accent line on hover — grows in from left */}
              <motion.div
                className="hidden md:block md:col-span-1 flex items-center justify-end"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <div className="w-8 h-px ml-auto" style={{ background: 'var(--accent)' }} />
              </motion.div>
            </motion.div>
          ))}
          {/* Bottom rule */}
          <div className="rule" />
        </div>
      </div>
    </section>
  );
}
