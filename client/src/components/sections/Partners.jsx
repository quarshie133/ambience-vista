import { useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, defaultViewport } from '../../lib/animations';

const partners = [
  { name: 'Coral Paints',  desc: 'Premium paint manufacturer' },
  { name: 'Dulux',         desc: 'International paint brand' },
  { name: 'Archxenus',     desc: 'Architecture & design' },
  { name: 'Habikon',       desc: 'Construction & materials' },
  { name: 'Sugru',         desc: 'Surface solutions' },
  { name: 'Edd McCray',    desc: 'Specialist contractor' },
  { name: 'MELYTAS',       desc: 'Industry partner' },
];

// Duplicate for infinite scroll effect
const marqueeItems = [...partners, ...partners];

export default function Partners() {
  return (
    <section id="partners" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="container-site">
        {/* Header */}
        <motion.div
          className="text-center max-w-xl mx-auto mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <motion.div className="section-label justify-center" variants={fadeInUp}>
            <span className="text-label">Our Network</span>
          </motion.div>
          <motion.h2
            className="text-display-md font-display mb-4"
            style={{ color: 'var(--text-primary)' }}
            variants={fadeInUp}
          >
            Partners & Collaborations
          </motion.h2>
          <motion.p className="text-sm" style={{ color: 'var(--text-secondary)' }} variants={fadeInUp}>
            We work with the industry's most respected brands to ensure our clients receive only the finest products and expertise.
          </motion.p>
        </motion.div>

        {/* Marquee */}
        <div className="relative overflow-hidden mb-16">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10" style={{ background: 'linear-gradient(90deg, var(--bg-primary), transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10" style={{ background: 'linear-gradient(270deg, var(--bg-primary), transparent)' }} />

          <div className="flex animate-marquee gap-6" style={{ width: 'max-content' }}>
            {marqueeItems.map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                className="flex-shrink-0 px-10 py-6 rounded-xl border flex flex-col items-center justify-center min-w-[200px] transition-all duration-300 hover:border-amber-400 cursor-default"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                {/* Logo placeholder — replace with actual logos */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-3 font-display text-lg font-medium"
                  style={{ background: 'var(--accent-pale)', color: 'var(--accent)' }}
                >
                  {partner.name[0]}
                </div>
                <p className="font-medium text-sm text-center" style={{ color: 'var(--text-primary)' }}>
                  {partner.name}
                </p>
                <p className="text-xs text-center mt-1" style={{ color: 'var(--text-muted)' }}>
                  {partner.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Grid (static, for SEO) */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              className="p-4 rounded-lg border text-center group cursor-default"
              style={{ background: 'var(--bg-surface)', borderColor: 'var(--border)' }}
              variants={fadeInUp}
              whileHover={{ borderColor: 'var(--accent-light)', background: 'var(--accent-pale)', transition: { duration: 0.2 } }}
            >
              <p className="font-medium text-sm" style={{ color: 'var(--text-primary)' }}>
                {partner.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
