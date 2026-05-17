import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';
import { fadeInUp, staggerContainer, defaultViewport } from '../../lib/animations';

const footerLinks = {
  Services: [
    'Paint Advisory & Procurement',
    'Residential Painting',
    'Commercial Painting',
    'Project-Based Support',
    'Surface Preparation',
    'Site Assessment',
  ],
  Company: [
    { label: 'About Us',    href: '#about'   },
    { label: 'Our Process', href: '#process' },
    { label: 'Gallery',     href: '#gallery' },
    { label: 'Impact',      href: '#impact'  },
    { label: 'Contact',     href: '#contact' },
  ],
};

const handleAnchor = (e, href) => {
  e.preventDefault();
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: 'var(--bg-dark)', color: 'var(--text-inverse)' }}>
      {/* Top CTA Banner */}
      <div style={{ background: 'var(--accent)', padding: '4rem 0' }}>
        <motion.div
          className="container-site flex flex-col md:flex-row items-center justify-between gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <motion.div variants={fadeInUp}>
            <p className="text-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Ready to begin?</p>
            <h3 className="font-display text-3xl md:text-4xl mt-2" style={{ color: '#fff' }}>
              Let's Transform Your Space
            </h3>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <a
              href="#contact"
              onClick={(e) => handleAnchor(e, '#contact')}
              className="btn-ghost-white"
            >
              Request a Site Assessment →
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Main Footer */}
      <div className="container-site" style={{ padding: '5rem clamp(1.5rem, 5vw, 5rem)' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img
                src="/Ambience-Vista-Logo-Colour.png"
                alt="Ambience Vista"
                style={{ height: '38px', width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.92 }}
              />
            </div>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
              We don't just paint — we guide clients on what to use, how much to use, and how to achieve better results through structure, supervision, and quality control.
            </p>
            <div className="flex gap-4 mt-6">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Facebook,  label: 'Facebook'  },
                { icon: Linkedin,  label: 'LinkedIn'  },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 hover:border-amber-500 hover:bg-amber-500/10"
                  style={{ borderColor: 'rgba(255,255,255,0.15)' }}
                >
                  <Icon size={15} style={{ color: 'rgba(255,255,255,0.6)' }} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs tracking-[0.15em] uppercase font-medium mb-5" style={{ color: 'var(--accent-light)' }}>
              Services
            </p>
            <ul className="space-y-3">
              {footerLinks.Services.map((s) => (
                <li key={s}>
                  <span className="text-sm transition-colors hover:text-white cursor-default" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-[0.15em] uppercase font-medium mb-5" style={{ color: 'var(--accent-light)' }}>
              Contact
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-1 flex-shrink-0" style={{ color: 'var(--accent-light)' }} />
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  Accra, Ghana
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} style={{ color: 'var(--accent-light)' }} />
                <a href="tel:+233000000000" className="text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  +233 000 000 000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} style={{ color: 'var(--accent-light)' }} />
                <a href="mailto:info@ambiencevista.com" className="text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  info@ambiencevista.com
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <p className="text-xs tracking-[0.15em] uppercase font-medium mb-3" style={{ color: 'var(--accent-light)' }}>
                Company
              </p>
              <ul className="space-y-2">
                {footerLinks.Company.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => handleAnchor(e, item.href)}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: 'rgba(255,255,255,0.5)' }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 mt-16 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            © {year} Ambience Vista. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            Premium Paint Specialists · Accra, Ghana
          </p>
        </div>
      </div>
    </footer>
  );
}
