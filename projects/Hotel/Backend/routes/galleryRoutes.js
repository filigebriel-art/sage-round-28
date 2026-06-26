// backend/routes/galleryRoutes.js - Simplified version

import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Simple in-memory storage for testing
let galleryImages = [];

// Configure multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../uploads/gallery'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// GET all gallery images
router.get('/api/gallery', (req, res) => {
    res.json(galleryImages);
});

// POST upload gallery images
router.post('/api/gallery', upload.array('images', 10), (req, res) => {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ error: 'No images uploaded' });
        }

        const images = req.files.map(file => ({
            _id: Date.now() + Math.random().toString(),
            imageUrl: `/uploads/gallery/${file.filename}`,
            filename: file.filename,
            title: req.body.title || 'Gallery Image',
            createdAt: new Date()
        }));

        galleryImages = [...galleryImages, ...images];
        res.status(201).json(images);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE single gallery image
router.delete('/api/gallery/:id', (req, res) => {
    const id = req.params.id;
    const imageIndex = galleryImages.findIndex(img => img._id === id);
    
    if (imageIndex === -1) {
        return res.status(404).json({ error: 'Image not found' });
    }
    
    galleryImages.splice(imageIndex, 1);
    res.json({ message: 'Image deleted successfully' });
});

// DELETE all gallery images
router.delete('/api/gallery', (req, res) => {
    galleryImages = [];
    res.json({ message: 'All images deleted successfully' });
});

export default router;