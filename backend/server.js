require('dotenv').config(); // Ensure this is at the top of the file

const { createClient } = require('pexels');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());



const apikey = process.env.PEXEL_API_KEY;
if (!apikey) {
    console.error('API Key is not defined in .env file');
    process.exit(1);
}

const client = createClient("reqlAVxrC2yRXxU0xDlImYeaPsXJ1zKyl0u22K9ZBieLPGoyxlh2Labm");

app.get('/', async (req, res) => {
    const query = req.query.query || 'tourism';

    try {
        const photos = await client.photos.search({ query, per_page: 30 });
        const photoUrls = photos.photos.map(photo => photo.src.medium);
        res.json({ urls: Array.isArray(photoUrls) ? photoUrls : [] });
    } catch (error) {
        console.error('Error fetching photos:', error);
        res.status(500).json({ error: 'Error fetching photos' });
    }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
