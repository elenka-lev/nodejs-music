import express from 'express';
import { getAlbumInfo, getAlbumTracks } from '../controllers/album.controller.js';

const router = express.Router();

router.get('/:albumId', getAlbumInfo);
router.get('/:albumId/tracks', getAlbumTracks);

export default router;