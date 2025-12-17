import express from 'express';
import { body } from 'express-validator';
import { register, login } from '../controllers/auth.controller.js';
import { googleLogin } from '../controllers/googleOAuth.js';

const router = express.Router();

router.post(
  '/register',
  [
    body('name').isLength({ min: 1 }).withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email required'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be >= 6 chars'),
  ],
  register,
);
router.post('/google', googleLogin);
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Valid email required'),
    body('password').exists().withMessage('Password required'),
  ],
  login,
);

export default router;
