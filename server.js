import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

// Simple API endpoints using direct fetch instead of unsplash-js
app.get('/api/photos/random', async (req, res) => {
  try {
    if (!process.env.UNSPLASH_ACCESS_KEY) {
      return res.status(503).json({ 
        error: 'Unsplash API not available. Please check your UNSPLASH_ACCESS_KEY.' 
      });
    }

    const { query = 'nature', count = 1 } = req.query;
    const url = `https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&count=${count}&orientation=landscape`;
    
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching photos:', error.message);
    res.status(500).json({ error: 'Failed to fetch photos' });
  }
});

app.get('/api/photos/search', async (req, res) => {
  try {
    if (!process.env.UNSPLASH_ACCESS_KEY) {
      return res.status(503).json({ 
        error: 'Unsplash API not available. Please check your UNSPLASH_ACCESS_KEY.' 
      });
    }

    const { query = 'nature', page = 1, perPage = 12 } = req.query;
    const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}&orientation=landscape`;
    
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error searching photos:', error.message);
    res.status(500).json({ error: 'Failed to search photos' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Visit: http://localhost:${PORT}`);
});
