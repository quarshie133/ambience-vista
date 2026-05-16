import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, defaultViewport } from '../../lib/animations';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  const handleContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="cta"
      className="relative overflow-hidden"
      style={{ padding: 'clamp(6rem, 12vw, 10rem) 0' }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=2000&q=80"
          alt="Premium paint finish"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(28,24,20,0.88)' }} />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(139,111,71,0.4) 0%, transparent 60%)' }}
        />
      </div>

      <motion.div
        className="container-narrow relative z-10 text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
      >
        <motion.div className="section-label justify-center mb-6" variants={fadeInUp}>
          <span className="text-label" style={{ color: 'var(--accent-light)' }}>Ready to Begin?</span>
        </motion.div>

        <motion.h2
          className="text-display-xl font-display mb-6"
          style={{ color: '#fff' }}
          variants={fadeInUp}
        >
          Every Great Space Starts With the Right{' '}
          <em style={{ color: 'var(--accent-light)', fontStyle: 'italic' }}>Foundation</em>
        </motion.h2>

        <motion.p
          className="text-lg mb-12 max-w-xl mx-auto"
          style={{ color: 'rgba(255,255,255,0.65)' }}
          variants={fadeInUp}
        >
          Let Ambience Vista assess your site, advise on the best approach, and deliver a finish that exceeds your expectations.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={fadeInUp}
        >
          <button
            onClick={handleContact}
            className="btn-primary text-base px-10 py-4"
            id="cta-request-assessment"
          >
            Request a Site Assessment
            <ArrowRight size={18} />
          </button>
          <a
            href="tel:+233000000000"
            className="btn-ghost-white text-base px-10 py-4"
          >
            Call Us Directly
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
