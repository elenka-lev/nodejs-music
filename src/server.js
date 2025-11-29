import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import dotenv from 'dotenv';
import { getEnvVar } from './utils/getEnvVar.js';
import chartRouter from './routes/chart.routes.js';
import artistRouter from './routes/artist.routes.js';
import albumRouter from './routes/album.routes.js';
import searchRouter from './routes/search.routes.js';
import authRouter from './routes/auth.routes.js';

dotenv.config();

const PORT = Number(getEnvVar('PORT', '3000'));

export const startServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.get('/', (req, res) => {
    res.json({
      message: 'Hello world!',
    });
  });

  app.use('/api/auth', authRouter);
  app.use('/api/charts', chartRouter);
  app.use('/api/artists', artistRouter);
  app.use('/api/albums', albumRouter);
  app.use('/api/search', searchRouter);

  app.use((req, res) => {
    res.status(404).json({
      message: 'Not found',
    });
  });

  app.use((err, req, res, next) => {
    res.status(500).json({
      message: 'Something went wrong',
      error: err.message,
    });
  });

  

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
