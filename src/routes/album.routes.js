import express from 'express';
import { getAlbumTracks } from '../controllers/album.controller.js';

const router = express.Router();


router.get('/:albumId/tracks', getAlbumTracks);

export default router;