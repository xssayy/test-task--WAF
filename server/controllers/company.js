import {
  createAppointment,
  createCompanyData,
  getAllCompanies,
  getCompanyData,
} from '../services/company.js';

export const getCompanyDataController = async (req, res) => {
  const user = req.user;

  const clientData = await getCompanyData(user._id);
  res.status(200).json({
    status: 200,
    message: `Successfully find data!`,
    data: clientData,
  });
};

export const getAllCompaniesController = async (req, res) => {
  const companies = await getAllCompanies();
  res.status(201).json({
    status: 201,
    companies,
    message: 'Successfully finded all companies!',
  });
};

export const createCompanyDataController = async (req, res) => {
  const companyData = req.body;
  const userId = req.user._id;
  const payload = {
    userId,
    companyData,
  };
  const data = await createCompanyData(payload);
  res.status(201).json({
    status: 201,
    data,
    message: 'Successfully inited a company account!',
  });
};

export const createAppointmentController = async (req, res) => {
  const { companyId } = req.params;
  const { appointmentTime, clientData } = req.body;
  const clientId = req.user._id;

  clientData.clientId = clientId;
  const clientDataPayload = {
    appointmentTime,
    clientData,
  };

  const payload = {
    companyId,
    clientDataPayload,
  };

  try {
    const data = await createAppointment(payload);
    res.status(201).json({
      status: 201,
      data,
      message: 'Successfully created an appointment on company account!',
    });
  } catch (error) {
    console.error('ERROR: ', error);
    res.status(404).json({
      status: 404,
      error: error.message,
      message:
        'An error occurred while trying to add the appointment to the company account.',
    });
  }
};
