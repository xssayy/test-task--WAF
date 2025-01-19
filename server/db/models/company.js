import { model, Schema } from 'mongoose';

export const companySchema = new Schema(
  {
    companyOwnerId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    companyName: { type: String, required: true },
    companyDescription: { type: String, required: true },
  },
  { timestamps: true, versionKey: false },
);

export const CompaniesCollection = model('companies', companySchema);
