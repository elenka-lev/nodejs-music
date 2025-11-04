import { fetchTopCharts } from '../services/deezer.service.js';

export const getTopCharts = async (req, res, next) => {
  try {
    const data = await fetchTopCharts();
    res.json(data);
  } catch (error) {
    next(error);
  }
};

export const getTopTracks = async (req, res, next) => {
  try {
    const data = await fetchTopCharts();
    res.json(data.tracks.data); // Отправляем только массив песен
  } catch (error) {
    next(error);
  }
};
