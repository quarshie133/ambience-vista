import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, defaultViewport } from '../../lib/animations';
import aboutImg1 from '../../assets/group_image.jpeg';
import aboutImg2 from '../../assets/team2.jpeg';
import founderImg from '../../assets/founder.jpeg';

const ABOUT_IMG_1 = aboutImg1;
const ABOUT_IMG_2 = aboutImg2;


export default function About() {
  return (
    <section id="about" className="section-padding" style={{ background: 'var(--bg-primary)' }}>

      {/* ── Row 1: Full-width text intro ───────────────────────────────────── */}
      <div className="container-site">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-24"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {/* Left — overline + heading */}
          <motion.div className="lg:col-span-6" variants={fadeInUp}>
            <div className="overline-row mb-6">
              <span className="overline">Our Story</span>
            </div>
            <h2 className="text-editorial-xl" style={{ color: 'var(--text-primary)' }}>
              Redefining Painting Standards in Ghana
            </h2>
          </motion.div>

          {/* Right — intro paragraph */}
          <motion.div
            className="lg:col-span-6 lg:pt-16"
            variants={fadeInUp}
          >
            <p className="body-editorial mb-6">
              Ambience Vista was founded on a single belief: that painting is a technical discipline that deserves the same rigour, structure, and expertise as any other construction trade.
            </p>
            <p className="body-editorial">
              We combine deep industry knowledge with a client-first approach to deliver outcomes that consistently exceed expectations — from residential homes to commercial developments.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Row 2: Full-width image ─────────────────────────────────────────── */}
      <motion.div
        className="relative overflow-hidden mb-24"
        style={{ height: 'clamp(360px, 55vw, 680px)' }}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
      >
        <img
          src={ABOUT_IMG_1}
          alt="Ambience Vista professional painting team"
          className="img-cover img-hover"
          style={{ objectPosition: 'center 20%' }}
        />
        {/* Floating stat — bottom right */}
        <motion.div
          className="absolute bottom-8 right-8 py-6 px-8"
          style={{ background: 'var(--accent)', color: '#fff' }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <p className="font-display" style={{ fontSize: '3rem', fontWeight: 300, lineHeight: 1 }}>6+</p>
          <p className="overline mt-2" style={{ color: 'rgba(255,255,255,0.75)' }}>Years of Excellence</p>
        </motion.div>
      </motion.div>

      {/* ── Row 3: 50/50 split — text left, image right ─────────────────────── */}
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left: text block */}
          <motion.div
            className="flex flex-col justify-center pr-0 lg:pr-20 py-12 lg:py-0"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <div className="overline-row mb-6">
              <span className="overline">Who We Are</span>
            </div>
            <h3 className="text-editorial-lg mb-8" style={{ color: 'var(--text-primary)' }}>
              Paint is our language. <em style={{ color: 'var(--accent)' }}>Quality</em> is our standard.
            </h3>
            <p className="body-editorial mb-5">
              We are a professional painting company operating at the intersection of craftsmanship, technical expertise, and client education. Our work goes beyond applying paint — we analyse surfaces, prescribe solutions, supervise execution, and inspect every outcome.
            </p>
            <p className="body-editorial mb-10">
              At Ambience Vista, we believe that the right paint, applied correctly to a properly prepared surface, should be a given — not an aspiration.
            </p>

            {/* Four pillars — clean list, Studio McGee style */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-7">
              {[
                { label: 'Structured Process',  desc: 'Defined methodology from assessment to handover.' },
                { label: 'Technical Expertise', desc: 'Surface analysis, product selection, precision application.' },
                { label: 'Client Education',    desc: 'Every decision explained — total transparency.' },
                { label: 'Quality Assurance',   desc: 'Multi-stage inspections at every project phase.' },
              ].map((v) => (
                <div key={v.label}>
                  <div className="w-6 h-px mb-3" style={{ background: 'var(--accent)' }} />
                  <p className="font-display" style={{ fontSize: '1.05rem', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>{v.label}</p>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: image */}
          <motion.div
            className="relative overflow-hidden"
            style={{ aspectRatio: '4/5', minHeight: '420px' }}
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <img
              src={ABOUT_IMG_2}
              alt="Professional team on site"
              className="img-cover img-hover"
            />
          </motion.div>
        </div>

        {/* ── Row 4: Mission statement — dark color block ───────────────────── */}
        <motion.div
          className="mt-0 p-12 lg:p-20"
          style={{ background: 'var(--bg-dark)' }}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-3">
              <div className="overline-row mb-0">
                <span className="overline" style={{ color: 'rgba(255,255,255,0.4)' }}>Our Mission</span>
              </div>
            </div>
            <div className="lg:col-span-9">
              <p className="text-editorial-md" style={{ color: '#fff', fontStyle: 'italic', lineHeight: 1.4 }}>
                "To bring international painting standards to the Ghanaian market while creating meaningful employment and training opportunities for the next generation."
              </p>
              <p className="body-editorial mt-6" style={{ color: 'rgba(255,255,255,0.55)' }}>
                We are committed to raising the bar for the painting industry in Ghana. Through structured training, women empowerment initiatives, and youth internship programs, we are building the future of the profession.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Row 5: Leadership Profile — Mrs. Faith Ametorgoh ──────────────── */}
        <div className="mt-24 lg:mt-32">
          <div className="overline-row mb-12">
            <span className="overline">Leadership</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Founder Image */}
            <motion.div 
              className="lg:col-span-5 relative"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/5', border: '1px solid var(--border)' }}>
                <img
                  src={founderImg}
                  alt="Mrs. Faith Ametorgoh - Founder & Managing Director"
                  className="img-cover img-hover"
                />
              </div>
              {/* Elegant floating caption */}
              <div 
                className="absolute -bottom-6 -right-6 py-4 px-6 hidden sm:block" 
                style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}
              >
                <p className="font-display italic" style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                  Mrs. Faith Ametorgoh
                </p>
                <p className="overline" style={{ fontSize: '0.6rem', color: 'var(--text-muted)', marginTop: '2px', letterSpacing: '0.15em' }}>
                  Founder & Managing Director
                </p>
              </div>
            </motion.div>

            {/* Right: Bio & Vision */}
            <motion.div 
              className="lg:col-span-7 lg:pl-4"
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <h3 className="text-editorial-lg mb-6" style={{ color: 'var(--text-primary)' }}>
                Guiding the Vision of Ambience Vista
              </h3>
              
              <blockquote className="font-display italic mb-6" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', borderLeft: '2px solid var(--accent)', paddingLeft: '1.5rem', lineHeight: 1.5 }}>
                "We founded Ambience Vista to replace ambiguity with precision. Painting is a science of surfaces, and our mission is to ensure every client gets exactly the longevity they pay for."
              </blockquote>

              <p className="body-editorial mb-6">
                Under the leadership of Mrs. Faith Ametorgoh, Ambience Vista has pioneered a structured framework for paint advisory, surface diagnosis, and application in Ghana. Her vision centers on raising the technical standards of local craftsmanship and empowering skilled artisans.
              </p>
              
              <p className="body-editorial">
                Through dedicated training modules and hands-on site supervision, she leads a team committed to precision, structured material reporting, and providing clients with total peace of mind from start to handover.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

