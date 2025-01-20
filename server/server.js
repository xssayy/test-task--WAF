// src/server.js

import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { errorHandler } from './middlewares/errorHandler.js';
import authRouter from './routers/auth.js';
import getEnvVar from './utils/getEnvVar.js';
import clientRouter from './routers/client.js';
import companiesRouter from './routers/company.js';

const PORT = Number(getEnvVar('PORT', '3000'));

export const startServer = () => {
  const app = express();
  const allowedOrigins = [
    'http://localhost:5173',
    'https://test-task-waf.onrender.com',
    'https://test-task-waf.vercel.app/',
  ];

  const corsOptions = {
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  };
  app.use(express.json());
  app.use(cors(corsOptions));
  app.use(cookieParser());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.use('/auth', authRouter);

  app.use('/client', clientRouter);

  app.use('/companies', companiesRouter);

  app.use('*', (req, res) => {
    res.status(404).json({
      message: 'Not found',
    });
  });

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
