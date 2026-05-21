import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../../assets/logo.png';


const services = [
  'Paint Advisory',
  'Residential Painting',
  'Commercial Painting',
  'Project Support',
  'Surface Preparation',
  'Site Assessment',
];

const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-dark)', color: 'rgba(255,255,255,0.55)' }}>

      {/* Main footer grid */}
      <div className="container-site" style={{ paddingTop: '5rem', paddingBottom: '4rem' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Brand col */}
          <div className="lg:col-span-4">
            <img
              src={logo}
              alt="Ambience Vista"
              style={{ height: '36px', width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.9, marginBottom: '1.5rem' }}
            />
            <p style={{ fontSize: '0.875rem', lineHeight: 1.8, maxWidth: '280px', color: 'rgba(255,255,255,0.48)' }}>
              Professional painting services built on structure, supervision, and quality control. Serving Greater Accra and across Ghana.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 mt-7">
              {[
                { label: 'instagram', href: '#', icon: Instagram },
                { label: 'facebook',  href: '#', icon: Facebook  },
                { label: 'linkedin',  href: '#', icon: Linkedin  },
              ].map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  style={{ color: 'rgba(255,255,255,0.35)', transition: 'color 0.3s', display: 'flex' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
                >
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Services col */}
          <div className="lg:col-span-3 lg:col-start-6">
            <p className="overline mb-5" style={{ color: 'rgba(255,255,255,0.28)' }}>Services</p>
            <ul style={{ listStyle: 'none' }} className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('#services')}
                    style={{ fontSize: '0.875rem', fontWeight: 400, color: 'rgba(255,255,255,0.48)', background: 'none', border: 'none', cursor: 'pointer', padding: 0, transition: 'color 0.3s', fontFamily: "'DM Sans', sans-serif" }}
                    onMouseEnter={e => e.target.style.color = '#fff'}
                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.48)'}
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact col */}
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="overline mb-5" style={{ color: 'rgba(255,255,255,0.28)' }}>Contact</p>
            <div className="space-y-4">
              {[
                { icon: Phone,  text: '+233 55 000 0000',       href: 'tel:+233550000000' },
                { icon: Mail,   text: 'info@ambiencevista.com', href: 'mailto:info@ambiencevista.com' },
                { icon: MapPin, text: 'Greater Accra, Ghana',   href: '#' },
              ].map(({ icon: Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.48)', textDecoration: 'none', transition: 'color 0.3s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.48)'}
                >
                  <Icon size={15} style={{ flexShrink: 0, marginTop: '2px', color: 'var(--accent)' }} strokeWidth={1.5} />
                  {text}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <button
                onClick={() => scrollTo('#contact')}
                className="btn-ghost-white"
                style={{ padding: '0.75rem 1.75rem', fontSize: '0.68rem' }}
              >
                Request an Assessment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container-site" style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.28)' }}>
              © {new Date().getFullYear()} Ambience Vista. All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: '2rem' }}>
              {['Privacy Policy', 'Terms of Service'].map((label) => (
                <a
                  key={label}
                  href="#"
                  style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.28)', textDecoration: 'none', transition: 'color 0.3s' }}
                  onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.28)'}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
