import { getTopAlbums, getTopCharts, getTopTracks } from "../controllers/chart.controller.js";
import express from 'express';

const router = express.Router();


router.get('/', getTopCharts);

router.get('/tracks', getTopTracks);

router.get('/albums', getTopAlbums);

export default router;
