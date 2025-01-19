import Joi from 'joi';
import { isValidObjectId } from 'mongoose';

export const companyItem = Joi.object({
  companyOwnerId: Joi.string()
    .custom((value, helpers) => {
      if (!isValidObjectId(value)) {
        return helpers.message('Invalid userId');
      }
      return value;
    })
    .required(),
  companyName: Joi.string().required(),
  companyDescription: Joi.string(),
});
