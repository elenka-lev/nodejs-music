import { Track } from "../models/trackModel.js";
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

export const toggleFavoriteService = async (userId, trackData) => {
  const user = await User.findById(userId);
  if (!user) throw new Error('User not found');

  
  let track = await Track.findOne({ trackId: trackData.id.toString() });

  if (!track) {
    
    track = await Track.create({
      trackId: trackData.id.toString(),
      title: trackData.title || 'Unknown Track',
      artist: trackData.artist?.name || trackData.artist || 'Unknown Artist',
      cover: trackData.album?.cover_medium || trackData.cover || '',
      preview: trackData.preview || '',
      duration: trackData.duration, 
      releaseDate: trackData.release_date || trackData.album?.release_date,
    });
  }

  const isFavorite = user.favorites.some(
    (favId) => favId.toString() === track._id.toString()
  );

  if (isFavorite) {
    user.favorites = user.favorites.filter(
      (favId) => favId.toString() !== track._id.toString()
    );
  } else {
    user.favorites.push(track._id);
  }

  await user.save();


  const updatedUser = await User.findById(userId).populate('favorites');
  return updatedUser.favorites;
};