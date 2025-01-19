import {
  createClientAppointment,
  deleteClientAppointment,
  getClientDataById,
  updateClientAppointment,
} from '../services/client.js';

export const getClientDataController = async (req, res) => {
  const user = req.user;

  const clientData = await getClientDataById(user._id);
  res.status(200).json({
    status: 200,
    message: `Successfully find data!`,
    data: clientData,
  });
};

export const createClientAppointmentController = async (req, res) => {
  const appointment = req.body;
  const userId = req.user._id;
  const payload = {
    userId,
    appointment,
  };
  const data = await createClientAppointment(payload);
  res.status(201).json({
    status: 201,
    data,
    message: 'Successfully created client appointment!',
  });
};

export const updateClientAppointmentController = async (req, res) => {
  const userId = req.user._id;
  const appointment = req.body;
  const payload = {
    userId,
    appointment,
  };
  const data = await updateClientAppointment(payload);
  res.status(200).json({
    status: 200,
    data,
    message: 'Successfully updated client appointment!',
  });
};

export const deleteClientAppointmentController = async (req, res) => {
  const userId = req.user._id;
  const { appointmentId } = req.params;
  const data = await deleteClientAppointment(userId, appointmentId);
  res.status(200).json({
    status: 200,
    data,
    message: 'Successfully deleted client appointment!',
  });
};
