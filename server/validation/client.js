import Joi from 'joi';
import { isValidObjectId } from 'mongoose';

const companyItemSchema = Joi.object({
  companyOwnerId: Joi.string().custom((value, helpers) => {
    if (!isValidObjectId(value)) {
      return helpers.message('Invalid userId');
    }
    return value;
  }),
  companyDescription: Joi.string().required(),
  companyName: Joi.string().required(),
});

export const createOrUpdateAppointmentSchema = Joi.object({
  appointmentTime: Joi.string().required(),
  company: companyItemSchema.required(),
  _id: Joi.string().custom((value, helpers) => {
    if (!isValidObjectId(value)) {
      return helpers.message('Invalid userId');
    }
    return value;
  }),
});
