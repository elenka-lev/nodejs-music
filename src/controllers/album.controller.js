import axios from 'axios';
import { DEEZER_API_URL } from '../utils/getEnvVar.js';

export const getAlbumTracks = async (req, res, next) => {
  try {
    const { albumId } = req.params;
    const response = await axios.get(
      `${DEEZER_API_URL}/album/${albumId}/tracks`,
    );
    res.json(response.data);
  } catch (error) {
    next(error);
  }
};
