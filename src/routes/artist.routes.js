import express from 'express';
import {
  getTopArtists,
  getArtistTopTracks,
  getArtistAlbums,
} from '../controllers/artist.controller.js';

const router = express.Router();

// GET /api/artists
router.get('/', getTopArtists);

// GET /api/artists/:id/top
router.get('/:id/top', getArtistTopTracks);

// GET /api/artists/:id/albums
router.get('/:id/albums', getArtistAlbums);

export default router;
