import axios from 'axios';
import { DEEZER_API_URL } from '../utils/getEnvVar.js';


export const fetchTopCharts = async () => {
  const response = await axios.get(`${DEEZER_API_URL}/chart`);
  return response.data;
};

export const fetchTopArtists = async () => {
  const response = await axios.get(`${DEEZER_API_URL}/chart`);
  return response.data.artists.data;
};

export const fetchArtistTopTracks = async (artistId) => {
  const response = await axios.get(
    `${DEEZER_API_URL}/artist/${artistId}/top?limit=50`,
  );
  return response.data.data;
};

export const fetchArtistAlbums = async (artistId) => {
  const response = await axios.get(`${DEEZER_API_URL}/artist/${artistId}/albums`);
  return response.data.data;
};

export const searchDeezer = async (
  q,
  type = 'track',
  limit = 20,
  index = 0,
) => {
  const basePath = type === 'track' ? 'search' : `search/${type}`;
  const url = `${DEEZER_API_URL}/${basePath}`;
  const params = { q, limit, index };

  const { data } = await axios.get(url, { params });
  return data; // возвращает объект с data: []
};