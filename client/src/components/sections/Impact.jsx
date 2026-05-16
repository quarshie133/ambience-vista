import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, defaultViewport, scaleIn } from '../../lib/animations';
import { Users, GraduationCap, Award, Handshake } from 'lucide-react';

const sdgs = [
  { number: '4', title: 'Quality Education', desc: 'Supporting skills development through structured internship programs and industry training.' },
  { number: '5', title: 'Gender Equality', desc: 'Championing women in the painting industry through our Women in Colour Initiative.' },
  { number: '8', title: 'Decent Work', desc: 'Creating dignified employment and economic opportunities for Ghanaian youth.' },
];

const impactStats = [
  { icon: Users,          value: '50+',  label: 'Interns Trained',        desc: 'Young professionals trained annually' },
  { icon: GraduationCap, value: '12+',  label: 'Training Seminars',      desc: 'Industry knowledge-sharing events' },
  { icon: Award,          value: '100%', label: 'Women Initiative',       desc: 'Active gender inclusion program'  },
  { icon: Handshake,      value: '7+',   label: 'Industry Partners',      desc: 'Strategic brand collaborations'   },
];

export default function Impact() {
  return (
    <section id="impact" className="section-padding" style={{ background: 'var(--bg-surface)' }}>
      <div className="container-site">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <motion.div className="section-label justify-center" variants={fadeInUp}>
            <span className="text-label">Beyond Paint</span>
          </motion.div>
          <motion.h2
            className="text-display-lg font-display mb-5"
            style={{ color: 'var(--text-primary)' }}
            variants={fadeInUp}
          >
            Impact & Industry Contribution
          </motion.h2>
          <motion.p className="text-base" style={{ color: 'var(--text-secondary)' }} variants={fadeInUp}>
            We believe business success and social responsibility are not mutually exclusive. Ambience Vista actively contributes to Ghana's development through training, inclusion, and industry collaboration.
          </motion.p>
        </motion.div>

        {/* SDG Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {sdgs.map((sdg) => (
            <motion.div
              key={sdg.number}
              className="relative p-8 rounded-2xl overflow-hidden group"
              style={{ background: 'var(--accent)', color: '#fff' }}
              variants={scaleIn}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div
                className="absolute top-4 right-4 font-display text-8xl font-light leading-none opacity-10"
              >
                {sdg.number}
              </div>
              <div className="relative z-10">
                <p className="text-xs tracking-[0.2em] uppercase mb-2 opacity-70">SDG {sdg.number}</p>
                <h3 className="font-display text-2xl font-medium mb-3">{sdg.title}</h3>
                <p className="text-sm leading-relaxed opacity-80">{sdg.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {impactStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="p-6 rounded-xl text-center card-base"
                variants={fadeInUp}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'var(--accent-pale)' }}
                >
                  <Icon size={20} style={{ color: 'var(--accent)' }} />
                </div>
                <p className="font-display text-4xl font-light mb-1" style={{ color: 'var(--accent)' }}>
                  {stat.value}
                </p>
                <p className="font-medium text-sm mb-1" style={{ color: 'var(--text-primary)' }}>
                  {stat.label}
                </p>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  {stat.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Initiatives Banner */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {/* Women in Colour */}
          <motion.div
            className="relative p-10 rounded-2xl overflow-hidden"
            style={{ background: 'var(--bg-dark)', color: '#fff' }}
            variants={fadeInUp}
          >
            <div
              className="absolute inset-0 opacity-10"
              style={{ background: 'linear-gradient(135deg, var(--accent), transparent)' }}
            />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5" style={{ background: 'rgba(139,111,71,0.2)', border: '1px solid rgba(196,168,130,0.3)' }}>
                <Users size={20} style={{ color: 'var(--accent-light)' }} />
              </div>
              <h3 className="font-display text-2xl mb-3">Women in Colour Initiative</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Our flagship social initiative actively recruits, trains, and supports women entering the painting profession. We believe diversity drives better outcomes, and we're committed to building an inclusive industry.
              </p>
            </div>
          </motion.div>

          {/* Training & IDDG */}
          <motion.div
            className="relative p-10 rounded-2xl overflow-hidden"
            style={{ background: 'var(--accent-pale)', border: '1px solid var(--accent-light)' }}
            variants={fadeInUp}
          >
            <h3 className="font-display text-2xl mb-3" style={{ color: 'var(--text-primary)' }}>
              Training & Industry Collaboration
            </h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
              Through partnerships with IDDG and industry organisations, we host regular training seminars and workshops that upskill painters across Ghana, raising the quality bar for the entire industry.
            </p>
            <ul className="space-y-2">
              {[
                'Regular skills development seminars',
                'Collaboration with IDDG & industry bodies',
                'Youth internship programs',
                'Professional certification pathways',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-primary)' }}>
                  <div className="w-4 h-px" style={{ background: 'var(--accent)' }} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
