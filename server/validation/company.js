import Joi from 'joi';
import { isValidObjectId } from 'mongoose';

const clientDataSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  clientId: Joi.string().custom((value, helpers) => {
    if (!isValidObjectId(value)) {
      return helpers.message('Invalid userId');
    }
    return value;
  }),
});

export const appointmentSchema = Joi.object({
  appointmentTime: Joi.date().required(),
  clientData: clientDataSchema.required(),
});

export const createCompany = Joi.object({
  companyOwnerId: Joi.string().custom((value, helpers) => {
    if (!isValidObjectId(value)) {
      return helpers.message('Invalid userId');
    }
    return value;
  }),
  companyName: Joi.string().required(),
  companyDescription: Joi.string().required(),
  appointments: Joi.array().items(appointmentSchema).optional(),
});
