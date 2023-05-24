// bookingRoutes.js

const express = require('express');
const {
  insertRoom,
  insertVenue,
  insertFood,
  insertPool,
} = require('./db'); // Import the database functions

const router = express.Router();

// POST route to handle form submission
router.post('/submit', async (req, res) => {
  const formData = req.body;

  try {
    if (formData.category === 'Room') {
      await insertRoom(formData);
    } else if (formData.category === 'Venue') {
      await insertVenue(formData);
    } else if (formData.category === 'Food') {
      await insertFood(formData);
    } else if (formData.category === 'Pool') {
      await insertPool(formData);
    }

    res.status(200).json({ message: 'Form submitted successfully.' });
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ error: 'An error occurred while submitting the form.' });
  }
});

module.exports = router;
