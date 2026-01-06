import { User } from "../models/userModel.js";

export const addFavorite = async (userId, trackId) => {
  const user = await User.findById(userId);
  if (!user) throw new Error('User not found');

  if (!user.favorites.includes(trackId)) {
    user.favorites.push(trackId);
    await user.save();
  }

  return user.favorites;
};
export const removeFavorite = async (userId, trackId) => {
  const user = await User.findById(userId);
  if (!user) throw new Error('User not found');

  user.favorites = user.favorites.filter(
    (id) => id.toString() !== trackId.toString(),
  );
  await user.save();

  return user.favorites;
};

export const getFavorites = async (userId) => {
  const user = await User.findById(userId).populate('favorites');
  if (!user) throw new Error('User not found');
  return user.favorites;
};

export const toggleFavoriteService = async (userId, trackId) => {
  const user = await User.findById(userId);
  if (!user) throw new Error('User not found');

  const isFavorite = user.favorites.some(
    (id) => id.toString() === trackId.toString(),
  );

  if (isFavorite) {
  
    user.favorites = user.favorites.filter(
      (id) => id.toString() !== trackId.toString(),
    );
  } else {
    
    user.favorites.push(trackId);
  }

  await user.save();
  return user.favorites;
};