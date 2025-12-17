import express from 'express';

import { getAlbumDetails,  getGenres, getPlaylistsByGenre, getPlaylistTracks, getTrackDetails, } from '../controllers/genre.controller.js';

const router = express.Router();


router.get('/genres', getGenres);
router.get('/genres/:genreId/playlists', getPlaylistsByGenre);
router.get('/playlists/:playlistId/tracks', getPlaylistTracks); 
router.get('/albums/:albumId', getAlbumDetails); 
router.get('/tracks/:trackId', getTrackDetails);
export default router;
