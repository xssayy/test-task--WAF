import createHttpError from 'http-errors';
import { ClientsCollection } from '../db/models/client.js';
import mongoose from 'mongoose';

export const getClientDataById = async (userId) => {
  return await ClientsCollection.findOne({ userId });
};

export const createClientAppointment = async (payload) => {
  const { userId, appointment } = payload;
  const oldData = await ClientsCollection.findOne({ userId });
  console.log('Check if document exists: ', oldData);

  if (!oldData) {
    const initialState = {
      userId,
      appointments: [appointment],
    };
    const clientData = await ClientsCollection.create(initialState);
    console.log('First appointment was created!');
    return clientData;
  } else {
    if (oldData.appointments.some((a) => a._id === appointment._id)) {
      throw new createHttpError(
        'Client already had an appointment to this company. Operation Canceled. Use update rout',
      );
    }
    oldData.appointments.push(appointment);
    await oldData.save();
    console.log('New appointment was added!');
    return oldData;
  }
};

export const updateClientAppointment = async (payload) => {
  const { userId, appointment } = payload;

  if (!mongoose.Types.ObjectId.isValid(appointment._id)) {
    throw new createHttpError.BadRequest('Invalid appointment ID');
  }

  try {
    const clientData = await ClientsCollection.findOne({ userId });
    if (!clientData) {
      throw new createHttpError.NotFound('Client data not found');
    }

    const appointmentsArray = clientData.appointments;

    const appoinmentToChangeIndex = appointmentsArray.findIndex(
      (a) => a._id.toString() === appointment._id.toString(),
    );

    if (appoinmentToChangeIndex !== -1) {
      appointmentsArray[appoinmentToChangeIndex] = appointment;
      await clientData.save();
      return clientData;
    } else {
      throw new createHttpError.NotFound('Appointment not found');
    }
  } catch (error) {
    console.error('Error updating appointment:', error);
    throw new createHttpError.InternalServerError(
      'Failed to update appointment',
    );
  }
};

export const deleteClientAppointment = async (userId, appointmentId) => {
  const result = await ClientsCollection.findOneAndUpdate(
    { userId },
    { $pull: { appointments: { _id: appointmentId } } },
    { new: true },
  );

  if (!result) {
    throw new createHttpError.NotFound('Client data not found');
  }

  return result;
};
