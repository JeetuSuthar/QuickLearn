const express = require('express');
const axios = require('axios');
require('dotenv').config(); // Load the environment variables
const summaryRoutes = require('./routes/summary'); // Import the summary route
const app = express();
const port = 5000; // Your backend will run on this port

// Middleware to parse JSON request bodies
app.use(express.json());

// Use the summary route for handling summary requests
app.use('/api', summaryRoutes); // All summary-related routes will be prefixed with /api

// Endpoint to fetch the summary from Gemini AI
app.get('/summary/:videoId', async (req, res) => {
  const videoId = req.params.videoId;
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;

  try {
    // Call the Gemini AI API for the summary
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`, // Use the correct API endpoint
      {
        contents: [
          {
            parts: [
              { text: `Summarize the video at this URL: ${youtubeUrl}` }
            ]
          }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    // Check if the response has the summary
    if (response.data && response.data.summary) {
      res.json({ summary: response.data.summary });
    } else {
      res.json({ summary: 'No summary available for this video.' });
    }
  } catch (error) {
    console.error('Error fetching summary:', error);
    res.status(500).json({ error: 'Failed to fetch the summary' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
