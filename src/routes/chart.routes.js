import { getTopCharts, getTopTracks } from "../controllers/chart.controller.js";
import express from 'express';

const router = express.Router();

// Маршрут: GET /api/charts
router.get('/', getTopCharts);

router.get('/tracks', getTopTracks);
export default router;
