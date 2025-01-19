import { Router } from 'express';
import { authenticate } from '../middlewares/authenticate.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {} from '../controllers/company.js';

import { validateBody } from '../middlewares/validateBody.js';
import { createCompany } from '../validation/company.js';

const clientRouter = Router();

clientRouter.use(authenticate);

clientRouter.get('/', ctrlWrapper());

clientRouter.post('/create', validateBody(createCompany), ctrlWrapper());

export default clientRouter;
