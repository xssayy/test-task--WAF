import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://test-task-waf.onrender.com/";

export const getCompanyData = createAsyncThunk(
  "companies/getCompanyData",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();

      const persistedToken = state.auth.accessToken;

      const response = await axios.get(`companies`, null, {
        Authorization: `Bearer ${persistedToken}`,
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllCompanies = createAsyncThunk(
  "companies/getAllCompanies",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();

      const persistedToken = state.auth.accessToken;

      const response = await axios.get(`companies/all-companies`, {
        Authorization: `Bearer ${persistedToken}`,
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createCompany = createAsyncThunk(
  "companies/init",
  async (companyData, thunkAPI) => {
    try {
      const state = thunkAPI.getState();

      const persistedToken = state.auth.accessToken;

      const response = await axios.post(`companies/init`, companyData, {
        Authorization: `Bearer ${persistedToken}`,
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const bookAppointmentToCompanyAcc = createAsyncThunk(
  "companies/create",
  async (payload, thunkAPI) => {
    console.log("Payload:", payload);
    console.log("CompanyId:", payload?.companyId);
    console.log("AppointmentBody:", payload?.appointmentBody);
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.accessToken;

      const { companyId, appointmentBody } = payload;

      const response = await axios.post(
        `companies/create/${companyId}`,
        appointmentBody,
        {
          Authorization: `Bearer ${persistedToken}`,
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
