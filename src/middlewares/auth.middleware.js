import jwt from 'jsonwebtoken';
import { getEnvVar } from '../utils/getEnvVar.js';
import { User } from '../models/userModel.js';

const JWT_SECRET = getEnvVar('JWT_SECRET', 'secret123');

export const requireAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const token = authHeader.split(' ')[1];
    const payload = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(payload.id).select('-password');
    if (!user) return res.status(401).json({ message: 'Unauthorized' });
    req.user = user;
    next();
  } catch (e) {
    next(e);
  }
};
