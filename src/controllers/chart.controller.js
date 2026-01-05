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
    res.json(data.tracks.data);
  } catch (error) {
    next(error);
  }
};

export const getTopAlbums = async (req, res, next) => {
  try {
    const data = await fetchTopCharts();
    res.json(data.albums.data);
  } catch (error) {
    next(error);
  }
};
