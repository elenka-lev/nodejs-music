import { searchDeezer } from "../services/deezer.service.js";

export const search = async (req, res, next) => {
try {
  const { q, type = 'track', limit = 20, page = 0 } = req.query;

  if (!q) {
    return res.status(400).json({ message: 'Query parameter q is required' });
  }

  const index = page * limit;

  
  const mainData = await searchDeezer(q, type, limit, index);


  if (type === 'track' && Number(page) === 0) {
    try {
      
      const artistSearch = await searchDeezer(q, 'artist', 1, 0);

      
      return res.json({
        ...mainData, 
        foundArtist:
          artistSearch.data && artistSearch.data.length > 0
            ? artistSearch.data[0]
            : null,
      });
    } catch (artistError) {
      
      console.error('Non-critical: Artist search failed', artistError);
      return res.json(mainData);
    }
  }

  
  res.json(mainData);
} catch (error) {
  next(error);
}
  
  // try {

  //   const { q, type = 'track', limit = 20, page = 0 } = req.query;

  //   if (!q) {
  //     return res.status(400).json({ message: 'Query parameter q is required' });
  //   }

  //   const index = page * limit;
  //   const data = await searchDeezer(q, type, limit, index);
  //   res.json(data);
  // } catch (error) {
  //   next(error);
  // }
};
