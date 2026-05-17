import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ChevronRight } from 'lucide-react';

// Premium Unsplash painting/interior image
const HERO_BG = 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?auto=format&fit=crop&w=2000&q=80';

export default function Hero() {
  const handleScroll = () => {
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleServices = () => {
    const el = document.querySelector('#services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={HERO_BG}
          alt="Premium interior painting"
          className="w-full h-full object-cover"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0"
          style={{
            background: `linear-gradient(
              135deg,
              rgba(28,24,20,0.88) 0%,
              rgba(28,24,20,0.62) 40%,
              rgba(240,120,64,0.18) 70%,
              rgba(28,24,20,0.78) 100%
            )`
          }}
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(28,24,20,0.92) 100%)' }}
        />
      </div>

      {/* Floating accent elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(240,120,64,0.1) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <div className="container-site relative z-10 pt-28 pb-20">
        <div className="max-w-4xl">
          {/* Label */}
          <motion.div
            className="section-label mb-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <span className="text-label" style={{ color: 'var(--accent-light)' }}>
              Accra, Ghana · Est. 2018
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-display-xl font-display mb-8 leading-tight"
            style={{ color: '#fff' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            We Help Clients Achieve{' '}
            <em style={{ color: 'var(--accent-light)', fontStyle: 'italic' }}>Better Painting</em>{' '}
            Outcomes Through Structure, Supervision, and Quality Control
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl leading-relaxed mb-12 max-w-2xl"
            style={{ color: 'rgba(255,255,255,0.72)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            We don't just paint — we guide clients on what to use, how much to use, and how to achieve better results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <button onClick={handleContact} className="btn-primary text-base px-8 py-4">
              Request a Site Assessment
              <ChevronRight size={18} />
            </button>
            <button onClick={handleServices} className="btn-ghost-white text-base px-8 py-4">
              View Our Services
            </button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            className="flex flex-wrap gap-10 mt-16 pt-10"
            style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            {[
              { value: '200+', label: 'Projects Completed' },
              { value: '150+', label: 'Happy Clients'      },
              { value: '6+',   label: 'Years Experience'   },
              { value: '100%', label: 'Quality Guaranteed'  },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
              >
                <p className="font-display text-4xl font-light" style={{ color: 'var(--accent)' }}>
                  {stat.value}
                </p>
                <p className="text-xs tracking-wide uppercase mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={handleScroll}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-[0.2em] uppercase" style={{ color: 'rgba(255,255,255,0.45)' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} style={{ color: 'rgba(255,255,255,0.45)' }} />
        </motion.div>
      </motion.button>
    </section>
  );
}
