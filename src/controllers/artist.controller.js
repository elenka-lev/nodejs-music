import { fetchTopArtists, fetchArtistTopTracks, fetchArtistAlbums } from '../services/deezer.service.js';

export const getTopArtists = async (req, res, next) => {
  try {
    const artists = await fetchTopArtists();
    res.json(artists);
  } catch (error) {
    next(error);
  }
};

export const getArtistTopTracks = async (req, res, next) => {
  try {
    const { id } = req.params;
    const tracks = await fetchArtistTopTracks(id);
    res.json(tracks);
  } catch (error) {
    next(error);
  }
};

export const getArtistAlbums = async (req, res, next) => {
  try {
    const { id } = req.params;
    const albums = await fetchArtistAlbums(id);
    res.json(albums);
  } catch (error) {
    next(error);
  }
};