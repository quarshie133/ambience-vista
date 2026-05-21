import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { fadeInUp, staggerContainer, defaultViewport } from '../../lib/animations';

import gallery1 from '../../assets/before_after image.jpeg';
import gallery2 from '../../assets/painting.jpeg';
import gallery3 from '../../assets/team.jpeg';
import gallery4 from '../../assets/room.jpeg';
import gallery5 from '../../assets/roller technique training.jpeg';
import gallery6 from '../../assets/painting_image.jpeg';
import gallery7 from '../../assets/building.jpeg';
import gallery8 from '../../assets/workshop_seminar1.jpeg';

// Curated gallery images — craftsmanship, process, detail, professional
const galleryImages = [
  {
    id: 1,
    src: gallery1,
    alt: 'Before and after transformation of a premium exterior painting project',
    category: 'process',
    title: 'Exterior Restoration',
    description: 'Full surface diagnosis, scraping, and application of premium weather-guard coating.',
  },
  {
    id: 2,
    src: gallery2,
    alt: 'Professional painting application on interior wall surface',
    category: 'process',
    title: 'Precision Application',
    description: 'Meticulous paint application ensuring even thickness, seamless coats, and clean borders.',
  },
  {
    id: 3,
    src: gallery3,
    alt: 'Ambience Vista team during professional on-site execution',
    category: 'team',
    title: 'On-Site Supervision',
    description: 'Our trained crew executing structured painting protocols under rigorous QA supervision.',
  },
  {
    id: 4,
    src: gallery4,
    alt: 'Beautiful residential bedroom interior with clean premium coat finish',
    category: 'residential',
    title: 'Sophisticated Interiors',
    description: 'Flawless finishes in modern residences, using curated palettes and premium low-VOC paints.',
  },
  {
    id: 5,
    src: gallery5,
    alt: 'Precision roller technique training during professional development seminar',
    category: 'process',
    title: 'Capacity Building',
    description: 'Continuous technical training for local painting artisans on advanced rollers and brushes.',
  },
  {
    id: 6,
    src: gallery6,
    alt: 'Close-up detail of smooth plastering and premium paint texture',
    category: 'detail',
    title: 'Textural Details',
    description: 'Perfect corner cuts, seamless drywall transitions, and flawless gloss inspections.',
  },
  {
    id: 7,
    src: gallery7,
    alt: 'Large-scale commercial building painting project completed successfully',
    category: 'commercial',
    title: 'Commercial Facades',
    description: 'Large-scale scaffolding, protective coatings, and exterior painting for commercial developments.',
  },
  {
    id: 8,
    src: gallery8,
    alt: 'Hands-on interactive painting workshop and capacity building seminar',
    category: 'team',
    title: 'Professional Workshops',
    description: 'Raising standard benchmarks in the industry through structured training seminars.',
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
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <div>
            <div className="overline-row mb-6">
              <span className="overline" style={{ color: 'rgba(255,255,255,0.6)' }}>Our Work</span>
            </div>
            <h2 className="text-editorial-xl" style={{ color: '#fff' }}>
              Project Highlights
            </h2>
          </div>

          {/* Filter Tabs */}
          <motion.div className="flex flex-wrap gap-x-6 gap-y-3 pb-2" variants={fadeInUp}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="text-[11px] tracking-[0.2em] uppercase font-semibold transition-colors duration-300 relative pb-2 cursor-pointer"
                style={{
                  color: activeCategory === cat ? 'var(--accent)' : 'rgba(255,255,255,0.4)',
                }}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px]"
                    style={{ background: 'var(--accent)' }}
                    layoutId="galleryFilterUnderline"
                  />
                )}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Structured Editorial Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((img, index) => (
              <motion.div
                key={img.id}
                className="flex flex-col cursor-pointer group"
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                onClick={() => openLightbox(index)}
              >
                {/* Image Container with fixed aspect ratio */}
                <div className="relative overflow-hidden rounded-xl aspect-[3/2] border border-white/5 mb-4">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    style={{ background: 'rgba(240,120,64,0.15)' }}
                  >
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#1E1E1C]/80 border border-white/10 shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn size={18} color="#fff" />
                    </div>
                  </div>
                </div>

                {/* Structured Text Content */}
                <div className="flex flex-col">
                  <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-accent mb-2">
                    {img.category}
                  </span>
                  <h3 className="font-display italic text-lg lg:text-xl text-white font-light leading-snug transition-colors duration-300 group-hover:text-accent">
                    {img.title}
                  </h3>
                  <p className="text-xs text-white/50 leading-relaxed mt-2">
                    {img.description}
                  </p>
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
