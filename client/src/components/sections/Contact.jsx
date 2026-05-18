import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, defaultViewport } from '../../lib/animations';
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

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
          className="text-center max-w-xl mx-auto mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <motion.div className="section-label justify-center" variants={fadeInUp}>
            <span className="text-label">Get In Touch</span>
          </motion.div>
          <motion.h2
            className="text-display-lg font-display mb-4"
            style={{ color: 'var(--text-primary)' }}
            variants={fadeInUp}
          >
            Let's Start Your Project
          </motion.h2>
          <motion.p className="text-base" style={{ color: 'var(--text-secondary)' }} variants={fadeInUp}>
            Tell us about your project. We'll respond within one business day with an assessment of how we can help.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-4"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <div className="space-y-6 mb-10">
              {[
                { icon: Phone,   label: 'Phone',    value: '+233 55 000 0000',            href: 'tel:+233550000000'              },
                { icon: Mail,    label: 'Email',    value: 'info@ambiencevista.com',      href: 'mailto:info@ambiencevista.com'  },
                { icon: MapPin,  label: 'Location', value: 'Greater Accra, Ghana',        href: '#'                              },
                { icon: Clock,   label: 'Hours',    value: 'Mon – Sat: 7am – 6pm',        href: '#'                              },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--accent-pale)' }}
                  >
                    <Icon size={18} style={{ color: 'var(--accent)' }} />
                  </div>
                  <div>
                    <p className="text-xs tracking-wide uppercase font-medium mb-1" style={{ color: 'var(--text-muted)' }}>
                      {label}
                    </p>
                    <a href={href} className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: 'var(--text-primary)' }}>
                      {value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Box */}
            <div
              className="p-6 rounded-2xl"
              style={{ background: 'var(--bg-dark)', color: '#fff' }}
            >
              <p className="font-display text-xl mb-3">Site Assessment</p>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Not sure where to start? Request a free on-site assessment and we'll diagnose your needs.
              </p>
              <a
                href="tel:+233000000000"
                className="btn-primary w-full justify-center text-sm"
              >
                Call Us Now
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-8"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <div
              className="p-8 md:p-12 rounded-2xl border"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
            >
              {status === 'success' ? (
                <motion.div
                  className="text-center py-16"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: 'var(--accent-pale)' }}
                  >
                    <CheckCircle size={32} style={{ color: 'var(--accent)' }} />
                  </div>
                  <h3 className="font-display text-2xl mb-3" style={{ color: 'var(--text-primary)' }}>
                    Message Received!
                  </h3>
                  <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
                    Thank you for reaching out. We'll be in touch within one business day.
                  </p>
                  <button
                    className="btn-secondary"
                    onClick={() => setStatus(null)}
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs tracking-wide uppercase font-medium mb-2" style={{ color: 'var(--text-muted)' }}>
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-all duration-300 focus:ring-2"
                        style={{ borderColor: 'var(--border)', background: 'var(--bg-primary)', color: 'var(--text-primary)', focusRingColor: 'var(--accent)' }}
                        onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border)'}
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-wide uppercase font-medium mb-2" style={{ color: 'var(--text-muted)' }}>
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-all duration-300"
                        style={{ borderColor: 'var(--border)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}
                        onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border)'}
                      />
                    </div>
                  </div>

                  {/* Phone + Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs tracking-wide uppercase font-medium mb-2" style={{ color: 'var(--text-muted)' }}>
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+233 000 000 000"
                        className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-all duration-300"
                        style={{ borderColor: 'var(--border)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}
                        onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border)'}
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-wide uppercase font-medium mb-2" style={{ color: 'var(--text-muted)' }}>
                        Service Interested In
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-all duration-300 cursor-pointer"
                        style={{ borderColor: 'var(--border)', background: 'var(--bg-primary)', color: form.service ? 'var(--text-primary)' : 'var(--text-muted)' }}
                        onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border)'}
                      >
                        <option value="">Select a service</option>
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs tracking-wide uppercase font-medium mb-2" style={{ color: 'var(--text-muted)' }}>
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project — surface type, size, location, and any specific requirements..."
                      className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-all duration-300 resize-none"
                      style={{ borderColor: 'var(--border)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}
                      onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>

                  {/* Error */}
                  {status === 'error' && (
                    <div className="flex items-center gap-2 p-3 rounded-lg text-sm" style={{ background: '#FEF2F2', color: '#DC2626' }}>
                      <AlertCircle size={16} />
                      {errorMsg}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn-primary w-full justify-center text-base py-4"
                    disabled={status === 'loading'}
                    id="contact-submit"
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>
                    We respond within 1 business day. Your information is kept private.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
