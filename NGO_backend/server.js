const express = require('express');
const router = express.Router();
const Volunteer = require('../models/Volunteer');

// @route   POST /api/volunteers
// @desc    Save volunteer form data
router.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Basic backend validation
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const newVolunteer = new Volunteer({ name, email, phone, message });
    await newVolunteer.save();
    res.status(201).json({ message: 'Registered successfully!' });
  } catch (error) {
    console.error('Error saving volunteer:', error);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});

module.exports = router;
