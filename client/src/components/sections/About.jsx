import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, defaultViewport } from '../../lib/animations';

const ABOUT_IMG_1 = 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80';
const ABOUT_IMG_2 = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80';

export default function About() {
  return (
    <section id="about" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="container-site">
        {/* Top: Label + Intro */}
        <motion.div
          className="mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <motion.div className="section-label" variants={fadeInUp}>
            <span className="text-label">Our Story</span>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <motion.h2
              className="text-display-lg font-display"
              style={{ color: 'var(--text-primary)' }}
              variants={fadeInUp}
            >
              Redefining Painting Standards in Ghana
            </motion.h2>
            <motion.p
              className="text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
              variants={fadeInUp}
            >
              Ambience Vista was founded on a single belief: that painting is a technical discipline that deserves the same rigour, structure, and expertise as any other construction trade. We combine deep industry knowledge with a client-first approach to deliver outcomes that consistently exceed expectations.
            </motion.p>
          </div>
        </motion.div>

        {/* Main Content: Image Left + Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-24">
          {/* Images */}
          <motion.div
            className="lg:col-span-5 relative"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <div className="relative rounded-lg overflow-hidden image-hover-scale" style={{ aspectRatio: '4/5' }}>
              <img
                src={ABOUT_IMG_1}
                alt="Professional painter at work"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Floating accent badge — inside image so it never overflows the column */}
              <motion.div
                className="absolute bottom-5 right-5 py-4 px-5 rounded-xl shadow-xl"
                style={{ background: 'var(--accent)', color: '#fff', backdropFilter: 'blur(4px)' }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <p className="font-display text-3xl font-light leading-none">6+</p>
                <p className="text-xs tracking-widest uppercase mt-1 opacity-85">Years of Excellence</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="lg:col-span-7 lg:pl-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <motion.div className="section-label" variants={fadeInUp}>
              <span className="text-label">Who We Are</span>
            </motion.div>
            <motion.h3
              className="font-display text-3xl md:text-4xl mb-6"
              style={{ color: 'var(--text-primary)' }}
              variants={fadeInUp}
            >
              Paint is Our Language. <em style={{ color: 'var(--accent)' }}>Quality</em> is Our Standard.
            </motion.h3>
            <motion.p className="text-base leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }} variants={fadeInUp}>
              We are a professional painting company operating at the intersection of craftsmanship, technical expertise, and client education. Our work goes beyond applying paint — we analyse surfaces, prescribe solutions, supervise execution, and inspect every outcome.
            </motion.p>
            <motion.p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }} variants={fadeInUp}>
              At Ambience Vista, we believe that the right paint, applied correctly to a properly prepared surface, should be a given — not an aspiration. We work to make that a reality for every client, every time.
            </motion.p>

            {/* Values Grid */}
            <motion.div className="grid grid-cols-2 gap-3 mt-8" variants={staggerContainer}>
              {[
                { label: 'Structured Process',  desc: 'Defined methodology from assessment to handover.' },
                { label: 'Technical Expertise', desc: 'Trained in surface analysis, product selection, and application.' },
                { label: 'Client Education',    desc: 'Clients understand every decision and why it was made.' },
                { label: 'Quality Assurance',   desc: 'Multi-stage inspections at every phase of the project.' },
              ].map((v) => (
                <motion.div
                  key={v.label}
                  className="p-4 rounded-xl"
                  style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}
                  variants={fadeInUp}
                  whileHover={{ borderColor: 'var(--accent)', transition: { duration: 0.2 } }}
                >
                  <div className="w-5 h-0.5 mb-3 rounded-full" style={{ background: 'var(--accent)' }} />
                  <p className="font-semibold text-sm mb-1.5 leading-snug" style={{ color: 'var(--text-primary)' }}>{v.label}</p>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{v.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom: Second image + Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-10 rounded-2xl" style={{ background: 'var(--bg-surface)' }}>
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <div className="section-label">
              <span className="text-label">Our Mission</span>
            </div>
            <p className="font-display text-2xl md:text-3xl mb-6" style={{ color: 'var(--text-primary)' }}>
              "To bring international painting standards to the Ghanaian market while creating meaningful employment and training opportunities."
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              We are committed to raising the bar for the painting industry in Ghana. Through structured training, women empowerment initiatives, and youth internship programs, we are building the next generation of painting professionals.
            </p>
          </motion.div>
          <motion.div
            className="rounded-xl overflow-hidden image-hover-scale"
            style={{ aspectRatio: '16/10' }}
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <img
              src={ABOUT_IMG_2}
              alt="Professional team on site"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
