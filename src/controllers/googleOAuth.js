import { googleAuth } from '../services/googleAuthService.js';

export const googleLogin = async (req, res, next) => {
  try {
    const { idToken } = req.body;

    if (!idToken) {
      return res.status(400).json({ message: 'idToken is required' });
    }

    const result = await googleAuth(idToken);
    res.json(result);
  } catch (e) {
    next(e);
  }
};
