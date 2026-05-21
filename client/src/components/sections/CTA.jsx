import { motion } from 'framer-motion';
import { defaultViewport } from '../../lib/animations';
import ctaImg from '../../assets/building.jpeg';

const CTA_IMG = ctaImg;


export default function CTA() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="cta" className="relative overflow-hidden" style={{ minHeight: '560px', display: 'flex', alignItems: 'stretch' }}>
      {/* Background image with strong overlay */}
      <div className="absolute inset-0">
        <img src={CTA_IMG} alt="Premium painting result" className="img-cover img-hover" />
        <div className="absolute inset-0" style={{ background: 'rgba(20,18,16,0.78)' }} />
      </div>

      <div className="container-site relative z-10 flex items-center">
        <div className="py-28 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.8 }}
          >
            <div className="overline-row mb-8">
              <span className="overline" style={{ color: 'rgba(255,255,255,0.4)' }}>Ready to Begin?</span>
            </div>
            <h2 className="text-editorial-xl mb-8" style={{ color: '#fff' }}>
              Let's Build Something Exceptional Together
            </h2>
            <p className="body-editorial mb-12" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '520px' }}>
              Request a site assessment and discover how Ambience Vista's structured approach can deliver better outcomes for your project — on time and within budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => scrollTo('#contact')} className="btn-primary">
                Request an Assessment
              </button>
              <button onClick={() => scrollTo('#services')} className="btn-ghost-white">
                Explore Our Services
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
