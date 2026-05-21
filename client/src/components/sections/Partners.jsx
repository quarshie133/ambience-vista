import { motion } from 'framer-motion';
import { defaultViewport } from '../../lib/animations';

const partners = [
  { name: 'Coral Paints' },
  { name: 'Dulux'        },
  { name: 'Archxenus'   },
  { name: 'Habikon'      },
  { name: 'Sugru'        },
  { name: 'Edd McCray'   },
  { name: 'MELYTAS'      },
];

// Duplicated for seamless infinite marquee
const all = [...partners, ...partners, ...partners];

export default function Partners() {
  return (
    <section id="partners" className="section-padding-sm" style={{ background: 'var(--bg-surface)' }}>
      <div className="container-site mb-12">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div
            className="lg:col-span-4"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            <div className="overline-row mb-5">
              <span className="overline">Partners & Collaborations</span>
            </div>
            <h2 className="text-editorial-lg" style={{ color: 'var(--text-primary)' }}>
              Trusted Brands We Work With
            </h2>
          </motion.div>
          <motion.div
            className="lg:col-span-5 lg:col-start-7 flex items-end"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6, delay: 0.2 } } }}
          >
            <p className="body-editorial">
              We work exclusively with reputable manufacturers and suppliers to ensure every product applied on your walls meets our exacting quality standards.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '1.5rem 0' }}>
        <div className="flex animate-marquee" style={{ width: 'max-content' }}>
          {all.map((p, i) => (
            <div
              key={i}
              className="flex items-center gap-8 px-12"
              style={{ flexShrink: 0 }}
            >
              <span className="font-display" style={{ fontSize: 'clamp(1.1rem,2vw,1.55rem)', fontWeight: 300, fontStyle: 'italic', color: 'var(--text-muted)', whiteSpace: 'nowrap', transition: 'color 0.3s' }}>
                {p.name}
              </span>
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0, opacity: 0.5 }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
