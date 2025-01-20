import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://test-task-waf.onrender.com/";

export const getClientData = createAsyncThunk(
  "client/getData",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();

      const persistedToken = state.auth.accessToken;

      const response = await axios.get(`client`, null, {
        Authorization: `Bearer ${persistedToken}`,
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const bookAppointment = createAsyncThunk(
  "client/create",
  async (appointment, thunkAPI) => {
    try {
      const state = thunkAPI.getState();

      const persistedToken = state.auth.accessToken;
      const response = await axios.post(`client/create`, appointment, {
        Authorization: `Bearer ${persistedToken}`,
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateClientData = createAsyncThunk(
  "client/update",
  async (appointment, thunkAPI) => {
    try {
      const state = thunkAPI.getState();

      const persistedToken = state.auth.accessToken;

      const response = await axios.patch(`client/update`, appointment, {
        Authorization: `Bearer ${persistedToken}`,
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteClientAppointment = createAsyncThunk(
  "client/delete",
  async (appointment, thunkAPI) => {
    try {
      const state = thunkAPI.getState();

      const persistedToken = state.auth.accessToken;

      const response = await axios.delete(
        `client/${appointment}`,
        appointment,
        {
          Authorization: `Bearer ${persistedToken}`,
        }
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
