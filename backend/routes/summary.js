const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const router = express.Router();
const GEMINI_API_KEY = process.env.GEMINI_API_KEY; // Ensure you have this in your .env file

// Summary route
router.post('/summary', async (req, res) => {
  const { contentToSummarize } = req.body; // Expecting content to summarize in the request body

  const requestBody = {
    contents: [
      {
        parts: [
          { text: contentToSummarize }
        ]
      }
    ]
  };

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`,
      requestBody,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const summary = response.data; // Adjust based on the response structure
    res.json({ summary }); // Send the summary back to the frontend
  } catch (error) {
    console.error('Error fetching summary:', error);
    res.status(500).json({ error: 'Failed to fetch the summary.' });
  }
});

module.exports = router;
