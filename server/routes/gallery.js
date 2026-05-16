import express from 'express';
import GalleryImage from '../models/GalleryImage.js';

const router = express.Router();

// GET /api/gallery
router.get('/', async (req, res) => {
  try {
    const { category, featured } = req.query;
    const query = { isActive: true };
    if (category) query.category = category;
    if (featured) query.isFeatured = true;

    const images = await GalleryImage.find(query).sort({ order: 1, createdAt: -1 });
    res.json({ success: true, data: images });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

export default router;
