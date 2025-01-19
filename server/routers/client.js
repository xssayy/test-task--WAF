import { Router } from 'express';
import { authenticate } from '../middlewares/authenticate.js';
const clientRouter = Router();

clientRouter.use(authenticate);

clientRouter.get('/', (req, res) => {
  res.json({
    message: 'Hello, World!',
  });
});

export default clientRouter;
