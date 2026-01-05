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
    if (e.message.includes('Wrong number of segments') || e.message.includes('Token used too late')) {
      return res.status(401).json({ 
        message: 'Invalid or expired Google token',
        details: e.message 
      });
    }
    
    
    console.error("FULL ERROR:", e); 
    res.status(500).json({ 
      message: 'Server error during Google Auth', 
      error: e.message 
    });
  }
};
