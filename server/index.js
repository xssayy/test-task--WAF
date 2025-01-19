import { initMongoDB } from './db/initMongoDB.js';
import { startServer } from './server.js';

const setupServer = async () => {
  await initMongoDB();
  startServer();
};

setupServer();
