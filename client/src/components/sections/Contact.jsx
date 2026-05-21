import { useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, defaultViewport } from '../../lib/animations';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { submitContact } from '../../lib/api';

const services = [
  'Paint Advisory & Procurement Support',
  'Residential Painting',
  'Commercial Painting',
  'Project-Based Painting Support',
  'Surface Preparation & Finishing',
  'Site Assessment & Paint Advisory',
  'Other / General Enquiry',
];

const initialForm = { name: '', email: '', phone: '', service: '', message: '' };

const inputStyle = {
  width: '100%',
  padding: '0.875rem 0',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid var(--border-dark)',
  color: 'var(--text-primary)',
  fontSize: '0.9375rem',
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: 300,
  outline: 'none',
  transition: 'border-color 0.3s',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      await submitContact(form);
      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="container-site">

        {/* Header */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <motion.div
            className="lg:col-span-6"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
          >
            <div className="overline-row mb-6">
              <span className="overline">Get In Touch</span>
            </div>
            <h2 className="text-editorial-xl" style={{ color: 'var(--text-primary)' }}>
              Let's Start Your Project
            </h2>
          </motion.div>
          <motion.div
            className="lg:col-span-5 lg:col-start-8 flex items-end"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.7, delay: 0.2 } } }}
          >
            <p className="body-editorial">
              Tell us about your project. We'll respond within one business day with an assessment of how we can help.
            </p>
          </motion.div>
        </motion.div>

        {/* Two-column layout — info left, form right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Left: contact details */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.6 }}
          >
            {/* Contact items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 mb-12">
              {[
                { icon: Phone,  label: 'Phone',    value: '+233 55 000 0000',      href: 'tel:+233550000000'              },
                { icon: Mail,   label: 'Email',    value: 'info@ambiencevista.com', href: 'mailto:info@ambiencevista.com'  },
                { icon: MapPin, label: 'Location', value: 'Greater Accra, Ghana',   href: '#'                              },
                { icon: Clock,  label: 'Hours',    value: 'Mon – Sat: 7am – 6pm',   href: '#'                              },
              ].map(({ icon: Icon, label, value, href }) => (
                <div 
                  key={label}
                  style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1.25rem' }}
                >
                  <p className="overline mb-2" style={{ color: 'var(--text-muted)' }}>{label}</p>
                  <a
                    href={href}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', textDecoration: 'none', color: 'var(--text-primary)', fontSize: '0.9375rem' }}
                  >
                    <Icon size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} strokeWidth={1.5} />
                    {value}
                  </a>
                </div>
              ))}
            </div>

            {/* Dark info panel */}
            <div className="p-8" style={{ background: 'var(--bg-dark)' }}>
              <p className="font-display mb-3" style={{ fontSize: '1.35rem', color: '#fff', fontStyle: 'italic', fontWeight: 300 }}>
                Not sure where to start?
              </p>
              <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Request a free on-site assessment — we'll visit your site, diagnose the surface conditions, and recommend the most effective solution.
              </p>
              <a
                href="tel:+233550000000"
                className="btn-ghost-white"
                style={{ padding: '0.75rem 1.5rem', fontSize: '0.68rem' }}
              >
                Call Us Now
              </a>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {status === 'success' ? (
              <motion.div
                className="py-20 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'var(--accent-pale)' }}>
                  <CheckCircle size={24} style={{ color: 'var(--accent)' }} />
                </div>
                <h3 className="font-display mb-3" style={{ fontSize: '2rem', fontStyle: 'italic', fontWeight: 300, color: 'var(--text-primary)' }}>
                  Message Received
                </h3>
                <p className="body-editorial mb-8">
                  Thank you for reaching out. We'll be in touch within one business day.
                </p>
                <button className="btn-ghost" onClick={() => setStatus(null)}>
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 mb-8">
                  <div>
                    <label className="overline block mb-3" style={{ color: 'var(--text-muted)' }}>Full Name *</label>
                    <input
                      id="contact-name" name="name" type="text" required
                      value={form.name} onChange={handleChange}
                      placeholder="Your full name"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderBottomColor = 'var(--accent)'}
                      onBlur={e => e.target.style.borderBottomColor = 'var(--border-dark)'}
                    />
                  </div>
                  <div>
                    <label className="overline block mb-3" style={{ color: 'var(--text-muted)' }}>Email Address *</label>
                    <input
                      id="contact-email" name="email" type="email" required
                      value={form.email} onChange={handleChange}
                      placeholder="your@email.com"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderBottomColor = 'var(--accent)'}
                      onBlur={e => e.target.style.borderBottomColor = 'var(--border-dark)'}
                    />
                  </div>
                </div>

                {/* Phone + Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 mb-8">
                  <div>
                    <label className="overline block mb-3" style={{ color: 'var(--text-muted)' }}>Phone Number</label>
                    <input
                      id="contact-phone" name="phone" type="tel"
                      value={form.phone} onChange={handleChange}
                      placeholder="+233 55 000 0000"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderBottomColor = 'var(--accent)'}
                      onBlur={e => e.target.style.borderBottomColor = 'var(--border-dark)'}
                    />
                  </div>
                  <div>
                    <label className="overline block mb-3" style={{ color: 'var(--text-muted)' }}>Service Interested In</label>
                    <select
                      id="contact-service" name="service"
                      value={form.service} onChange={handleChange}
                      style={{ ...inputStyle, cursor: 'pointer', appearance: 'none' }}
                      onFocus={e => e.target.style.borderBottomColor = 'var(--accent)'}
                      onBlur={e => e.target.style.borderBottomColor = 'var(--border-dark)'}
                    >
                      <option value="">Select a service</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="mb-10">
                  <label className="overline block mb-3" style={{ color: 'var(--text-muted)' }}>Message *</label>
                  <textarea
                    id="contact-message" name="message" required rows={5}
                    value={form.message} onChange={handleChange}
                    placeholder="Tell us about your project — surface type, size, location, and any specific requirements..."
                    style={{ ...inputStyle, resize: 'none', lineHeight: 1.7 }}
                    onFocus={e => e.target.style.borderBottomColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderBottomColor = 'var(--border-dark)'}
                  />
                </div>

                {/* Error */}
                {status === 'error' && (
                  <div className="flex items-center gap-2 mb-6 text-sm" style={{ color: '#DC2626' }}>
                    <AlertCircle size={15} />
                    {errorMsg}
                  </div>
                )}

                {/* Submit */}
                <div className="flex items-center gap-6">
                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={status === 'loading'}
                    id="contact-submit"
                    style={{ padding: '0.875rem 2.5rem' }}
                  >
                    {status === 'loading' ? (
                      <>
                        <div style={{ width: '14px', height: '14px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
                        Sending...
                      </>
                    ) : (
                      <>Send Message <Send size={14} /></>
                    )}
                  </button>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    We respond within 1 business day.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
