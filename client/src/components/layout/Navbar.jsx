import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About',    href: '#about'    },
  { label: 'Services', href: '#services' },
  { label: 'Process',  href: '#process'  },
  { label: 'Gallery',  href: '#gallery'  },
  { label: 'Impact',   href: '#impact'   },
  { label: 'Contact',  href: '#contact'  },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const handleAnchor = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'navbar-blur border-b bg-white/90'
            : 'bg-transparent'
        }`}
        style={{ borderColor: scrolled ? 'var(--border)' : 'transparent' }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="/Ambience-Vista-Logo-Colour.png"
                alt="Ambience Vista"
                style={{
                  height: '40px',
                  width: 'auto',
                  filter: scrolled ? 'none' : 'brightness(0) invert(1)',
                  transition: 'filter 0.5s ease',
                }}
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleAnchor(e, link.href)}
                  className="text-sm font-medium tracking-wide transition-colors duration-300 hover:opacity-70"
                  style={{ color: scrolled ? 'var(--text-secondary)' : 'rgba(255,255,255,0.85)' }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="#contact"
                onClick={(e) => handleAnchor(e, '#contact')}
                className="btn-primary text-sm"
                style={!scrolled ? { background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.35)' } : {}}
              >
                Get in Touch
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{ color: scrolled ? 'var(--text-primary)' : '#fff' }}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-black/50" onClick={() => setMenuOpen(false)} />
            <motion.div
              className="absolute top-0 right-0 bottom-0 w-80 bg-white flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: 'var(--border)' }}>
                <img src="/Ambience-Vista-Logo-Colour.png" alt="Ambience Vista" style={{ height: '32px', width: 'auto' }} />
                <button onClick={() => setMenuOpen(false)} style={{ color: 'var(--text-secondary)' }}>
                  <X size={20} />
                </button>
              </div>
              <nav className="flex flex-col p-6 gap-2 flex-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleAnchor(e, link.href)}
                    className="flex items-center justify-between py-4 border-b text-base font-medium transition-colors hover:opacity-70"
                    style={{ color: 'var(--text-primary)', borderColor: 'var(--border)' }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    {link.label}
                    <span style={{ color: 'var(--accent)' }}>→</span>
                  </motion.a>
                ))}
              </nav>
              <div className="p-6">
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
