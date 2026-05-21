import { motion } from 'framer-motion';
import { staggerContainer, defaultViewport } from '../../lib/animations';

const impacts = [
  { stat: 'SDG 4',  label: 'Quality Education',     desc: 'Providing structured technical training and internship programmes for youth entering the painting trade — building industry-ready professionals.' },
  { stat: 'SDG 5',  label: 'Gender Equality',        desc: 'Our Women in Colour Initiative creates dedicated pathways for women to build careers in the painting industry and achieve financial independence.' },
  { stat: 'SDG 8',  label: 'Decent Work & Growth',   desc: 'Creating formal employment, fair wages, and professional development opportunities in a sector that has historically operated informally.' },
];

const initiatives = [
  { number: '50+',  label: 'Interns Trained',             desc: 'Young professionals placed and mentored through structured internship programmes.' },
  { number: '12+',  label: 'Women in Colour Members',     desc: 'Women trained, certified, and employed through our gender inclusion initiative.' },
  { number: '20+',  label: 'Industry Seminars',           desc: 'Training events delivered in partnership with IDDG and industry stakeholders.' },
  { number: '3+',   label: 'SDGs Directly Addressed',     desc: 'Measurable contributions to the UN Sustainable Development Goals.' },
];

export default function Impact() {
  return (
    <section id="impact" className="section-padding" style={{ background: 'var(--bg-dark)' }}>
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
            className="lg:col-span-6"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
          >
            <div className="overline-row mb-6">
              <span className="overline" style={{ color: 'rgba(255,255,255,0.4)' }}>Industry Contribution</span>
            </div>
            <h2 className="text-editorial-xl" style={{ color: '#fff' }}>
              Beyond Paint
            </h2>
          </motion.div>
          <motion.div
            className="lg:col-span-5 lg:col-start-8 flex items-end"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.7, delay: 0.2 } } }}
          >
            <p className="body-editorial" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Ambience Vista is committed to building a stronger, more inclusive, and more professional painting industry in Ghana.
            </p>
          </motion.div>
        </motion.div>

        {/* SDG Cards — dark panels, Studio McGee column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px mb-20" style={{ background: 'rgba(255,255,255,0.07)' }}>
          {impacts.map((item, i) => (
            <motion.div
              key={item.stat}
              className="p-10 lg:p-12"
              style={{ background: 'var(--bg-dark)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <p className="font-display mb-1" style={{ fontSize: '2.5rem', fontWeight: 300, color: 'var(--accent)', fontStyle: 'italic' }}>
                {item.stat}
              </p>
              <div className="w-6 h-px mb-5" style={{ background: 'var(--accent)' }} />
              <p className="overline mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>{item.label}</p>
              <p className="body-editorial" style={{ color: 'rgba(255,255,255,0.55)' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Initiatives stats row */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '4rem' }}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {initiatives.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <p className="font-display" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>
                  {item.number}
                </p>
                <p className="overline mt-2 mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>{item.label}</p>
                <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* IDDG mention */}
        <motion.div
          className="mt-16 pt-10 flex flex-col md:flex-row md:items-center gap-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-8 h-px flex-shrink-0" style={{ background: 'var(--accent)' }} />
          <p className="body-editorial" style={{ color: 'rgba(255,255,255,0.5)' }}>
            In collaboration with <span style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>IDDG</span> — the Industry Development & Governance Group — we continue to advocate for formal standards, certification pathways, and best-practice adoption across Ghana's painting industry.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
