import express from 'express';
import { search } from '../controllers/search.controller.js';

const router = express.Router();

router.get('/', search); // /api/search?q=eminem&type=artist

export default router;
