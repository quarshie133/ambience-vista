import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { staggerContainer, defaultViewport } from '../../lib/animations';
import processImg from '../../assets/site.jpeg';

const steps = [
  { number: '01', title: 'Site Assessment & Diagnosis',         duration: '1–2 Days',        description: 'We visit your site to diagnose existing surface conditions, identify problem areas, assess environmental factors, and understand the full scope of your project.' },
  { number: '02', title: 'Client Requirement Review',          duration: '1 Day',           description: 'We sit with you to understand your aesthetic preferences, functional requirements, budget constraints, and project timeline to develop a tailored solution.' },
  { number: '03', title: 'Surface Preparation',               duration: 'Varies by scope',  description: 'Our team carefully prepares all surfaces — cleaning, repairing, filling, sanding, and priming — to ensure perfect adhesion and a flawless base for paint.' },
  { number: '04', title: 'Material Selection & Quality Checks', duration: '1–3 Days',        description: 'We select and procure specification-appropriate products, verify quality, calculate quantities precisely, and ensure everything is ready before painting begins.' },
  { number: '05', title: 'Execution & Supervision',            duration: 'Project Dependent', description: 'Skilled painters execute the work under direct supervision. We monitor every coat, every surface, and every detail throughout the entire painting process.' },
  { number: '06', title: 'Inspection & Handover',             duration: '1 Day',           description: 'We conduct a comprehensive final inspection before handover. Any defects are corrected, surfaces are validated, and you receive a quality assurance report.' },
];

function StepRow({ step, index, total }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div ref={ref} style={{ borderTop: '1px solid var(--border)', display: 'grid', gridTemplateColumns: '2.5rem 1fr auto', gap: '2.5rem', padding: '2rem 0', alignItems: 'start' }}>
      {/* Number circle */}
      <motion.div
        style={{
          width: '2.5rem', height: '2.5rem', borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: '1px solid',
          borderColor: isInView ? 'var(--accent)' : 'var(--border)',
          background: isInView ? 'var(--accent)' : 'transparent',
          transition: 'all 0.6s ease',
          transitionDelay: `${index * 0.1}s`,
          flexShrink: 0,
        }}
      >
        <span style={{ fontSize: '0.7rem', fontWeight: 600, color: isInView ? '#fff' : 'var(--text-muted)', letterSpacing: '0.05em' }}>
          {step.number}
        </span>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.55, delay: index * 0.08 + 0.1 }}
      >
        <h3 className="font-display mb-2" style={{ fontSize: 'clamp(1.1rem,1.8vw,1.45rem)', fontWeight: 400, color: 'var(--text-primary)', lineHeight: 1.2 }}>
          {step.title}
        </h3>
        <p className="body-editorial" style={{ maxWidth: '520px' }}>{step.description}</p>
      </motion.div>

      {/* Duration tag */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.08 + 0.2 }}
        style={{ flexShrink: 0, paddingTop: '0.25rem' }}
      >
        <span className="overline-accent">{step.duration}</span>
      </motion.div>
    </div>
  );
}

export default function Process() {
  return (
    <section id="process" className="section-padding" style={{ background: 'var(--bg-surface)' }}>
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left: sticky header + image */}
          <motion.div
            className="lg:col-span-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
            >
              <div className="overline-row mb-6">
                <span className="overline">How We Work</span>
              </div>
              <h2 className="text-editorial-lg mb-6" style={{ color: 'var(--text-primary)' }}>
                Our Process
              </h2>
              <p className="body-editorial mb-10">
                Every project follows a structured, repeatable process that ensures consistent quality — from the first assessment to the final handover. No guesswork. No shortcuts.
              </p>
            </motion.div>

            <motion.div
              className="relative overflow-hidden"
              style={{ aspectRatio: '3/4' }}
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8, delay: 0.3 } } }}
            >
              <img
                src={processImg}
                alt="Ambience Vista team at work"
                className="img-cover img-hover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6" style={{ background: 'linear-gradient(transparent, rgba(20,18,16,0.75))' }}>
                <p className="font-display" style={{ fontSize: '1.35rem', color: '#fff', fontStyle: 'italic', fontWeight: 300 }}>
                  Precision at every step.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: steps */}
          <div className="lg:col-span-8 pt-0 lg:pt-4">
            {steps.map((step, i) => (
              <StepRow key={step.number} step={step} index={i} total={steps.length} />
            ))}
            <div className="rule" />
          </div>
        </div>
      </div>
    </section>
  );
}
