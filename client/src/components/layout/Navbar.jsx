import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.png';


const navLinks = [
  { label: 'About',    href: '#about'    },
  { label: 'Services', href: '#services' },
  { label: 'Process',  href: '#process'  },
  { label: 'Gallery',  href: '#gallery'  },
  { label: 'Impact',   href: '#impact'   },
  { label: 'Contact',  href: '#contact'  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const handleAnchor = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'navbar-blur' : 'bg-transparent'}`}
        style={{ borderBottom: scrolled ? '1px solid var(--border)' : '1px solid rgba(255,255,255,0.08)', background: scrolled ? 'rgba(245,243,239,0.92)' : 'transparent' }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container-site">
          <div className="flex items-center justify-between" style={{ height: '72px' }}>
            {/* Logo */}
            <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={logo}
                alt="Ambience Vista"
                style={{
                  height: '36px',
                  width: 'auto',
                  filter: scrolled ? 'none' : 'brightness(0) invert(1)',
                  transition: 'filter 0.4s ease',
                }}
              />
            </Link>

            {/* Desktop nav — centered links */}
            <nav className="hidden lg:flex items-center gap-9">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleAnchor(e, link.href)}
                  className="overline transition-colors duration-300"
                  style={{
                    color: scrolled ? 'var(--text-secondary)' : 'rgba(255,255,255,0.72)',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => e.target.style.color = scrolled ? 'var(--text-primary)' : '#fff'}
                  onMouseLeave={e => e.target.style.color = scrolled ? 'var(--text-secondary)' : 'rgba(255,255,255,0.72)'}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                onClick={(e) => handleAnchor(e, '#contact')}
                className={scrolled ? 'btn-ghost' : 'btn-ghost-white'}
                style={{ padding: '0.625rem 1.5rem', fontSize: '0.68rem' }}
              >
                Get in Touch
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{ color: scrolled ? 'var(--text-primary)' : '#fff' }}
            >
              {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute inset-0 bg-black/40" onClick={() => setMenuOpen(false)} />
            <motion.div
              className="absolute top-0 right-0 bottom-0 w-80 flex flex-col"
              style={{ background: 'var(--bg-primary)' }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-8 py-6" style={{ borderBottom: '1px solid var(--border)' }}>
                <img src={logo} alt="Ambience Vista" style={{ height: '30px', width: 'auto' }} />
                <button onClick={() => setMenuOpen(false)} style={{ color: 'var(--text-secondary)' }}>
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col px-8 py-8 gap-1 flex-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleAnchor(e, link.href)}
                    className="font-display"
                    style={{ fontSize: '1.5rem', fontStyle: 'italic', fontWeight: 300, color: 'var(--text-primary)', textDecoration: 'none', padding: '0.75rem 0', borderBottom: '1px solid var(--border)', display: 'block' }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="px-8 pb-10">
                <a
                  href="#contact"
                  onClick={(e) => handleAnchor(e, '#contact')}
                  className="btn-primary w-full justify-center"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
