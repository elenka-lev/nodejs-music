import { validationResult } from 'express-validator';
import { registerUser, loginUser } from '../services/authService.js';

export const register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;
    const result = await registerUser({ name, email, password });
    res.status(201).json(result); 
  } catch (e) {
    next(e);
  }
};

export const login = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const { email, password } = req.body;
    const result = await loginUser({ email, password });
    res.json(result); 
  } catch (e) {
    next(e);
  }
};
