import { CompaniesCollection } from '../db/models/company.js';
import createHttpError from 'http-errors';

export const getCompanyData = async (userId) => {
  return await CompaniesCollection.findOne({ companyOwnerId: userId });
};

export const getAllCompanies = async () => {
  return await CompaniesCollection.find();
};

export const createCompanyData = async (payload) => {
  const { userId, companyData } = payload;

  const existingCompany = await CompaniesCollection.findOne({
    companyOwnerId: userId,
  });
  if (existingCompany) {
    throw createHttpError(409, 'You already have a company registered.');
  }

  const initialState = {
    companyOwnerId: userId,
    companyName: companyData.companyName,
    companyDescription: companyData.companyDescription,
    appointments: [],
  };
  const company = await CompaniesCollection.create(initialState);
  return company;
};

export const createAppointment = async (payload) => {
  const { companyId, clientDataPayload } = payload;

  console.log('PAYLOAD: ', payload);

  console.log('COMPANY ID: ', companyId);

  const company = await CompaniesCollection.findOne({ _id: companyId });

  if (!company) {
    throw createHttpError.NotFound('Company not found');
  }

  console.log('COMPANY BODY: ', company);

  console.log('CLIEND DATA: ', clientDataPayload);
  company.appointments.push(clientDataPayload);

  console.log('FINDPOINT: ', company.appointments);

  await company.save();

  return company;
};
