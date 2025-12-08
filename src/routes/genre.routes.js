import express from 'express';

import { getAlbumDetailsController, getGenres, getPlaylistsByGenre, getPlaylistTracks, getTrackDetailsController } from '../controllers/genre.controller.js';

const router = express.Router();


router.get('/genres', getGenres);
router.get('/genres/:genreId/playlists', getPlaylistsByGenre);
router.get('/playlists/:playlistId/tracks', getPlaylistTracks); 
router.get('/albums/:albumId', getAlbumDetailsController); 
router.get('/tracks/:trackId', getTrackDetailsController);
export default router;
