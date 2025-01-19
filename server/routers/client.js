import { Router } from 'express';
import { authenticate } from '../middlewares/authenticate.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  createClientAppointmentController,
  deleteClientAppointmentController,
  getClientDataController,
  updateClientAppointmentController,
} from '../controllers/client.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createOrUpdateAppointmentSchema } from '../validation/client.js';

const clientRouter = Router();

clientRouter.use(authenticate);

clientRouter.get('/', ctrlWrapper(getClientDataController));

clientRouter.post(
  '/create',
  validateBody(createOrUpdateAppointmentSchema),
  ctrlWrapper(createClientAppointmentController),
);

clientRouter.patch(
  '/update',
  validateBody(createOrUpdateAppointmentSchema),
  ctrlWrapper(updateClientAppointmentController),
);

clientRouter.delete(
  '/:appointmentId',
  ctrlWrapper(deleteClientAppointmentController),
);

export default clientRouter;
