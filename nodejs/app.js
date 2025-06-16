const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files like HTML, CSS, JS

// Endpoint to handle MD5 generation requests from the frontend
app.post('/generate-md5', async (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: 'Invalid input' });
    }

    try {
        const response = await axios.post('http://localhost:5000/md5', { text });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to communicate with Flask service' });
    }
});

// Serve the HTML interface
app.listen(3000, () => {
    console.log('Node.js app is running on http://localhost:3000');
});
