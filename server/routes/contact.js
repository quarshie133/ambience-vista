import express from 'express';
import ContactMessage from '../models/ContactMessage.js';

const router = express.Router();

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, email, and message are required.' 
      });
    }

    const newMessage = await ContactMessage.create({
      name, email, phone, service, message
    });

    res.status(201).json({ 
      success: true, 
      message: 'Thank you! Your message has been received. We will be in touch shortly.',
      id: newMessage._id
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Something went wrong. Please try again.' 
    });
  }
});

export default router;
