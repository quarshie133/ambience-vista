import mongoose from 'mongoose';

const galleryImageSchema = new mongoose.Schema({
  url: { type: String, required: true },
  alt: { type: String, required: true },
  caption: { type: String },
  category: { 
    type: String, 
    enum: ['residential', 'commercial', 'process', 'detail', 'team'], 
    default: 'residential' 
  },
  order: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
  isFeatured: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model('GalleryImage', galleryImageSchema);
