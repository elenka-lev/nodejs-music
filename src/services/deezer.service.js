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


export const fetchGenreList = async () => {
  try {
    const response = await axios.get(`${DEEZER_API_URL}/genre`);
    return response.data.data;
  } catch (e) {
    console.log(e);
    throw new Error('Failed to fetch genres');
  }
};

export const fetchPlaylistsByGenre = async (genreId) => {
   try {
     const response = await axios.get(
       `${DEEZER_API_URL}/genre/${genreId}/playlists`,
     );
     return response.data.data;
   } catch (e) {
     console.log(e);
     throw new Error('Failed to fetch playlists');
   }
};

export const fetchPlaylistTracks = async (playlistId) => {
  try {
    const response = await axios.get(
      `${DEEZER_API_URL}/playlist/${playlistId}`,
    );
    return response.data.tracks.data;
  } catch (e) {
    console.log(e);
    throw new Error('Failed to fetch playlist tracks');
  }
};

export const fetchAlbumDetails = async (albumId) => {
   try {
     const response = await axios.get(`${DEEZER_API_URL}/album/${albumId}`);
     return response.data;
   } catch (e) {
      console.log(e);
     throw new Error('Failed to fetch album details');
   }
};

export const fetchTrackDetails = async (trackId) => {
  try {
    const response = await axios.get(`${DEEZER_API_URL}/track/${trackId}`);
    return response.data;
  } catch (e) {
    console.log(e);
    throw new Error('Failed to fetch track details');
  }
};    
