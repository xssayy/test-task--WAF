import { Router } from 'express';
import { authenticate } from '../middlewares/authenticate.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  createAppointmentController,
  createCompanyDataController,
  getAllCompaniesController,
  getCompanyDataController,
} from '../controllers/company.js';

import { validateBody } from '../middlewares/validateBody.js';
import { appointmentSchema, createCompany } from '../validation/company.js';

const companiesRouter = Router();

companiesRouter.use(authenticate);

companiesRouter.get('/', ctrlWrapper(getCompanyDataController));

companiesRouter.get('/all-companies', ctrlWrapper(getAllCompaniesController));

companiesRouter.post(
  '/init',
  validateBody(createCompany),
  ctrlWrapper(createCompanyDataController),
);

companiesRouter.post(
  '/create/:companyId',
  validateBody(appointmentSchema),
  ctrlWrapper(createAppointmentController),
);

export default companiesRouter;
