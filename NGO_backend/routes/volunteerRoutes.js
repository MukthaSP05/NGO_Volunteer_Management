const express = require('express');
const router = express.Router();
const Volunteer = require('../models/Volunteer');

// POST - Register a new volunteer
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const newVolunteer = new Volunteer({ name, email, phone, message });
    await newVolunteer.save();

    res.status(201).json({ message: 'Volunteer registered successfully.' });
  } catch (error) {
    console.error('POST error:', error);
    res.status(500).json({ error: 'Server error while registering volunteer.' });
  }
});

// GET - Fetch all volunteers (latest first)
router.get('/', async (req, res) => {
  try {
    const volunteers = await Volunteer.find().sort({ _id: -1 }); // latest first
    res.json(volunteers);
  } catch (error) {
    console.error('GET error:', error);
    res.status(500).json({ error: 'Server error while fetching volunteers.' });
  }
});

// DELETE - Remove a volunteer by ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Volunteer.findByIdAndDelete(req.params.id);
    if (deleted) {
      res.json({ message: 'Volunteer deleted successfully.' });
    } else {
      res.status(404).json({ error: 'Volunteer not found.' });
    }
  } catch (error) {
    console.error('DELETE error:', error);
    res.status(500).json({ error: 'Server error while deleting volunteer.' });
  }
});

module.exports = router;
