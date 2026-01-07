import { OAuth2Client } from 'google-auth-library';
import jwt from 'jsonwebtoken';
import { User } from '../models/userModel.js';
import { getEnvVar } from '../utils/getEnvVar.js';

const client = new OAuth2Client(getEnvVar('GOOGLE_CLIENT_ID'));
const JWT_SECRET = getEnvVar('JWT_SECRET');

export const googleAuth = async (idToken) => {
  
  const ticket = await client.verifyIdToken({
    idToken,
    audience: getEnvVar('GOOGLE_CLIENT_ID'),
  });

  const payload = ticket.getPayload();

  const { sub: googleId, email, name, picture } = payload;

 
  let user = await User.findOne({ email });

  
  if (!user) {
    user = await User.create({
      name,
      email,
      googleId,
      avatar: picture,
    });
  } else if (!user.googleId) {
    user.googleId = googleId;
    if (!user.avatar) user.avatar = picture;
    await user.save();
  }

 
  const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
    expiresIn: '7d',
  });

  return {
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
    },
    token,
  };
};
