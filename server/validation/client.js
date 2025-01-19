import Joi from 'joi';
import { isValidObjectId } from 'mongoose';
import { companyItem } from './company.js';

export const createOrUpdateAppointmentSchema = Joi.object({
  appointmentTime: Joi.string().required(),
  company: companyItem.required(),
  _id: Joi.string().custom((value, helpers) => {
    if (!isValidObjectId(value)) {
      return helpers.message('Invalid userId');
    }
    return value;
  }),
});
