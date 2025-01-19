import { model, Schema } from 'mongoose';
import { companySchema } from './company.js';

const appointmentSchema = new Schema({
  appointmentTime: {
    type: String,
    required: true,
  },
  company: { type: companySchema, required: true },
});

const clientsSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    appointments: [{ type: appointmentSchema, default: [], required: true }],
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const ClientsCollection = model('clients', clientsSchema);
