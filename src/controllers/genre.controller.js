import { fetchAlbumDetails, fetchGenreList, fetchPlaylistsByGenre, fetchPlaylistTracks, fetchTrackDetails } from "../services/deezer.service.js";

export const getGenres = async (req, res, next) => {
  try {
    const genres = await fetchGenreList();
    res.json(genres);
  } catch (e) {
    next(e);
  }
};

export const getPlaylistsByGenre = async (req, res, next) => {
  try {
    const { genreId } = req.params;
    const playlists = await fetchPlaylistsByGenre(genreId);
    res.json(playlists);
  } catch (e) {
    next(e);
  }
};

export const getPlaylistTracks = async (req, res, next) => {
  try {
    const { playlistId } = req.params;
    const tracks = await fetchPlaylistTracks(playlistId);
    res.json(tracks);
  } catch (e) {
    next(e);
  }
};

export const getAlbumDetails = async (req, res, next) => {
  try {
    const { albumId } = req.params;
    const album = await fetchAlbumDetails(albumId);
    res.json(album);
  } catch (e) {
    next(e);
  }
};

export const getTrackDetails = async (req, res, next) => {
  try {
    const { trackId } = req.params;
    const track = await fetchTrackDetails(trackId);
    res.json(track);
  } catch (e) {
    next(e);
  }
};
