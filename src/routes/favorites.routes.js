import express from 'express';
import { requireAuth } from '../middlewares/auth.middleware.js';
import { addToFavorites, getFavoritesList, removeFromFavorites, toggleFavorite } from '../controllers/favorites.controller.js';

const router = express.Router();

router.use(requireAuth); 

router.post('/', addToFavorites); 
router.delete('/', removeFromFavorites); 
router.get('/', getFavoritesList); 
router.post('/toggle', toggleFavorite);
export default router;
