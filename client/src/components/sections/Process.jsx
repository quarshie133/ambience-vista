import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { defaultViewport } from '../../lib/animations';

const steps = [
  {
    number: '01',
    title: 'Site Assessment & Diagnosis',
    description: 'We visit your site to diagnose existing surface conditions, identify problem areas, assess environmental factors, and understand the full scope of your project.',
    duration: '1–2 Days',
  },
  {
    number: '02',
    title: 'Client Requirement Review',
    description: 'We sit with you to understand your aesthetic preferences, functional requirements, budget constraints, and project timeline to develop a tailored solution.',
    duration: '1 Day',
  },
  {
    number: '03',
    title: 'Surface Preparation',
    description: 'Our team carefully prepares all surfaces — cleaning, repairing, filling, sanding, and priming — to ensure perfect adhesion and a flawless base for paint.',
    duration: 'Varies',
  },
  {
    number: '04',
    title: 'Material Selection & Quality Checks',
    description: 'We select and procure the specification-appropriate products, verify quality, calculate quantities precisely, and ensure everything is ready before painting begins.',
    duration: '1–3 Days',
  },
  {
    number: '05',
    title: 'Execution & Supervision',
    description: 'Skilled painters execute the work under direct supervision. We monitor every coat, every surface, and every detail throughout the painting process.',
    duration: 'Project Dependent',
  },
  {
    number: '06',
    title: 'Inspection & Handover',
    description: 'We conduct a comprehensive final inspection before handover. Any defects are corrected, surfaces are validated, and you receive a quality assurance report.',
    duration: '1 Day',
  },
];

function StepItem({ step, index, total }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const isLast = index === total - 1;

  return (
    <div ref={ref} className="relative flex gap-8">
      {/* Left: Number + Line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <motion.div
          className="w-14 h-14 rounded-full flex items-center justify-center font-display text-lg font-medium border-2 z-10"
          style={{
            background: isInView ? 'var(--accent)' : 'var(--bg-surface)',
            borderColor: 'var(--accent)',
            color: isInView ? '#fff' : 'var(--accent)',
            transition: 'all 0.5s ease',
            transitionDelay: `${index * 0.1}s`,
          }}
        >
          {step.number}
        </motion.div>
        {!isLast && (
          <motion.div
            className="w-px flex-1 mt-2"
            style={{ background: 'var(--border)' }}
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : { height: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
          />
        )}
      </div>

      {/* Right: Content */}
      <motion.div
        className="pb-12 flex-1"
        initial={{ opacity: 0, x: 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
      >
        <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
          <h3 className="font-medium text-xl" style={{ color: 'var(--text-primary)' }}>
            {step.title}
          </h3>
          <span
            className="text-xs tracking-wide uppercase px-3 py-1 rounded-full flex-shrink-0"
            style={{ background: 'var(--accent-pale)', color: 'var(--accent)' }}
          >
            {step.duration}
          </span>
        </div>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {step.description}
        </p>
      </motion.div>
    </div>
  );
}

export default function Process() {
  return (
    <section id="process" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Header + Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.7 }}
          >
            <div className="section-label">
              <span className="text-label">How We Work</span>
            </div>
            <h2 className="text-display-lg font-display mb-6" style={{ color: 'var(--text-primary)' }}>
              Our Process
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: 'var(--text-secondary)' }}>
              Every project we undertake follows a structured, repeatable process that ensures consistent quality from the first assessment to the final handover. No guesswork. No shortcuts.
            </p>

            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ aspectRatio: '4/3' }}
            >
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80"
                alt="Ambience Vista team at work"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(28,28,26,0.8) 100%)' }}
              />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-display text-2xl text-white mb-1">Precision at Every Step</p>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  Supervision, not just execution
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Steps */}
          <div className="pt-4">
            {steps.map((step, i) => (
              <StepItem key={step.number} step={step} index={i} total={steps.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
