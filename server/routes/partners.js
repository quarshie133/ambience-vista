import express from 'express';
import Partner from '../models/Partner.js';

const router = express.Router();

// GET /api/partners
router.get('/', async (req, res) => {
  try {
    const partners = await Partner.find({ isActive: true }).sort({ order: 1 });
    res.json({ success: true, data: partners });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

export default router;
