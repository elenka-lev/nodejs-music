import express from 'express';
import {
  getTopArtists,
  getArtistTopTracks,
  getArtistAlbums,
} from '../controllers/artist.controller.js';

const router = express.Router();

router.get('/', getTopArtists);
router.get('/:id/top', getArtistTopTracks);
router.get('/:id/albums', getArtistAlbums);

export default router;
