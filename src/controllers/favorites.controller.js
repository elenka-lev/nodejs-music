import {
  addFavorite,
  removeFavorite,
  getFavorites,
  toggleFavoriteService,
} from '../services/favoritesService.js';

export const addToFavorites = async (req, res, next) => {
  try {
    const trackId = req.body.trackId;
     if (!trackId) {
       return res.status(400).json({ message: 'trackId is required' });
     }
    const favorites = await addFavorite(req.user._id, trackId);
    res.json({ favorites });
  } catch (e) {
    next(e);
  }
};

export const removeFromFavorites = async (req, res, next) => {
  try {
    const trackId = req.body.trackId;
     if (!trackId) {
       return res.status(400).json({ message: 'trackId is required' });
     }
    const favorites = await removeFavorite(req.user._id, trackId);
    res.json({ favorites });
  } catch (e) {
    next(e);
  }
};

export const getFavoritesList = async (req, res, next) => {
  try {
    const favorites = await getFavorites(req.user._id);
    res.json({ favorites });
  } catch (e) {
    next(e);
  }
};

export const toggleFavorite = async (req, res, next) => {
  try {
    const { trackData } = req.body; 

    if (!trackData || !trackData.id) {
      return res.status(400).json({ message: 'trackData with id is required' });
    }
    const favorites = await toggleFavoriteService(req.user._id, trackData);
    res.json({ favorites });
  } catch (e) {
    next(e);
  }
};