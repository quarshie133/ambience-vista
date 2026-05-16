import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { fadeInUp, staggerContainer, defaultViewport } from '../../lib/animations';

// Curated gallery images — craftsmanship, process, detail, professional
const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?auto=format&fit=crop&w=800&q=80',
    alt: 'Close-up of professional paint finish detail',
    category: 'detail',
    span: 'row-span-2',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80',
    alt: 'Professional painter applying coat',
    category: 'process',
    span: '',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
    alt: 'Site supervisor reviewing quality',
    category: 'team',
    span: '',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    alt: 'Fresh paint on residential wall',
    category: 'residential',
    span: 'col-span-2',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=600&q=80',
    alt: 'Surface preparation in progress',
    category: 'process',
    span: 'row-span-2',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=600&q=80',
    alt: 'Paint brush detail craftsmanship',
    category: 'detail',
    span: '',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
    alt: 'Commercial painting project',
    category: 'commercial',
    span: 'col-span-2',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?auto=format&fit=crop&w=600&q=80',
    alt: 'Paint finish quality inspection',
    category: 'detail',
    span: '',
  },
];

const categories = ['All', 'Residential', 'Commercial', 'Process', 'Detail', 'Team'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category.toLowerCase() === activeCategory.toLowerCase());

  const openLightbox = useCallback((index) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(() => setLightboxIndex(i => (i - 1 + filtered.length) % filtered.length), [filtered.length]);
  const nextImage = useCallback(() => setLightboxIndex(i => (i + 1) % filtered.length), [filtered.length]);

  return (
    <section id="gallery" className="section-padding" style={{ background: 'var(--bg-dark)' }}>
      <div className="container-site">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <div>
            <motion.div className="section-label" variants={fadeInUp}>
              <span className="text-label" style={{ color: 'var(--accent-light)' }}>Our Work</span>
            </motion.div>
            <motion.h2
              className="text-display-lg font-display"
              style={{ color: '#fff' }}
              variants={fadeInUp}
            >
              Project Highlights
            </motion.h2>
          </div>

          {/* Filter Tabs */}
          <motion.div className="flex flex-wrap gap-2" variants={fadeInUp}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300"
                style={{
                  background: activeCategory === cat ? 'var(--accent)' : 'rgba(255,255,255,0.08)',
                  color: activeCategory === cat ? '#fff' : 'rgba(255,255,255,0.6)',
                  border: activeCategory === cat ? 'none' : '1px solid rgba(255,255,255,0.12)',
                }}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[200px]"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((img, index) => (
              <motion.div
                key={img.id}
                className={`relative overflow-hidden rounded-xl cursor-pointer group ${img.span || ''}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ background: 'rgba(139,111,71,0.5)' }}
                >
                  <ZoomIn size={28} color="#fff" />
                </div>
                {/* Category badge */}
                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span
                    className="text-xs px-2 py-1 rounded-full capitalize"
                    style={{ background: 'rgba(28,28,26,0.75)', color: '#fff' }}
                  >
                    {img.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ background: 'rgba(28,24,20,0.95)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center z-10"
              style={{ background: 'rgba(255,255,255,0.1)' }}
              onClick={closeLightbox}
            >
              <X size={18} color="#fff" />
            </button>

            {/* Prev */}
            <button
              className="absolute left-5 w-12 h-12 rounded-full flex items-center justify-center z-10"
              style={{ background: 'rgba(255,255,255,0.1)' }}
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              <ChevronLeft size={22} color="#fff" />
            </button>

            {/* Image */}
            <motion.img
              key={lightboxIndex}
              src={filtered[lightboxIndex]?.src}
              alt={filtered[lightboxIndex]?.alt}
              className="max-w-5xl max-h-[85vh] object-contain rounded-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            <button
              className="absolute right-5 w-12 h-12 rounded-full flex items-center justify-center z-10"
              style={{ background: 'rgba(255,255,255,0.1)' }}
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              <ChevronRight size={22} color="#fff" />
            </button>

            {/* Caption */}
            <div className="absolute bottom-6 text-center">
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                {filtered[lightboxIndex]?.alt}
              </p>
              <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
                {lightboxIndex + 1} / {filtered.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
