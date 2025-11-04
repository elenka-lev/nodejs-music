import { searchDeezer } from "../services/deezer.service.js";

export const search = async (req, res, next) => {
  try {
    const { q, type = 'track', limit = 20, page = 0 } = req.query;

    if (!q) {
      return res.status(400).json({ message: 'Query parameter q is required' });
    }

    const index = page * limit;
    const data = await searchDeezer(q, type, limit, index);
    res.json(data);
  } catch (error) {
    next(error);
  }
};
