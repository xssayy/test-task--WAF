import { model, Schema } from 'mongoose';

const companySchema = new Schema({
  companyOwnerId: { type: Schema.Types.ObjectId, ref: 'users', required: true },
  companyName: { type: String, required: true },
  companyDescription: { type: String, required: true },
});

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
    appointments: [{ type: appointmentSchema, default: [], required: false }],
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const ClientsCollection = model('clients', clientsSchema);
