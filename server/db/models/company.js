import { model, Schema } from 'mongoose';

const clientDataSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  clientId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
});

const appointmentSchema = new Schema(
  {
    appointmentTime: { type: Date, required: true },
    clientData: { type: clientDataSchema, required: true },
  },
  { _id: false },
);

const companySchema = new Schema(
  {
    companyOwnerId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    companyName: { type: String, required: true },
    companyDescription: { type: String, required: true },
    appointments: {
      type: [appointmentSchema],
      default: [],
      required: false,
    },
  },
  { timestamps: true, versionKey: false },
);

export const CompaniesCollection = model('companies', companySchema);
