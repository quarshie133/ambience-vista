import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import heroBg from '../../assets/hero section image.jpeg';

const HERO_BG = heroBg;

export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col">
      {/* Full-bleed image */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src={HERO_BG}
          alt="Premium interior painting"
          className="w-full h-full object-cover"
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Studio McGee style: dark vignette, not heavy overlay */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, rgba(20,18,16,0.52) 0%, rgba(20,18,16,0.35) 50%, rgba(20,18,16,0.72) 100%)'
        }} />
      </div>

      {/* Content — left-aligned, lower third */}
      <div className="relative z-10 flex-1 flex flex-col justify-end">
        <div className="container-site pb-20 md:pb-28">
          {/* Overline */}
          <motion.p
            className="overline mb-6"
            style={{ color: 'rgba(255,255,255,0.6)' }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Accra, Ghana · Est. 2018
          </motion.p>

          {/* Giant italic headline */}
          <motion.h1
            className="text-editorial-hero mb-10"
            style={{ color: '#fff', maxWidth: '820px' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            We Help Clients Achieve Better Painting Outcomes
          </motion.h1>

          {/* Subtitle + CTAs in a row */}
          <motion.div
            className="flex flex-col sm:flex-row sm:items-end gap-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
          >
            <p style={{ color: 'rgba(255,255,255,0.72)', maxWidth: '400px', fontSize: '0.9375rem', lineHeight: 1.75, fontWeight: 300 }}>
              Through structure, supervision, and quality control — we guide clients on what to use, how much to use, and how to achieve better results.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <button onClick={() => scrollTo('#contact')} className="btn-primary">
                Request an Assessment
              </button>
              <button onClick={() => scrollTo('#services')} className="btn-ghost-white">
                Our Services
              </button>
            </div>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            className="flex flex-wrap gap-10 mt-16 pt-10"
            style={{ borderTop: '1px solid rgba(255,255,255,0.14)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {[
              { value: '200+', label: 'Projects Completed' },
              { value: '150+', label: 'Happy Clients'      },
              { value: '6+',   label: 'Years of Excellence' },
              { value: '100%', label: 'Quality Guaranteed'  },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + i * 0.08, duration: 0.5 }}
              >
                <p className="font-display" style={{ fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>
                  {s.value}
                </p>
                <p className="overline mt-1" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  {s.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => scrollTo('#about')}
        className="absolute bottom-8 right-10 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        aria-label="Scroll down"
        style={{ color: 'rgba(255,255,255,0.45)' }}
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
