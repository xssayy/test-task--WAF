import { createSlice } from "@reduxjs/toolkit";
import {
  deleteClientAppointment,
  getClientData,
  updateClientData,
} from "./operations";

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const usersInitialState = {
  clientData: {},
  loading: false,
  error: null,
};

const clientsSlice = createSlice({
  name: "client",
  initialState: usersInitialState,

  extraReducers: (builder) => {
    builder
      .addCase(getClientData.pending, handlePending)
      .addCase(getClientData.fulfilled, (state, action) => {
        state.clientData = action.payload.data;
        state.loading = false;
        state.error = null;
      })
      .addCase(getClientData.rejected, handleRejected)
      .addCase(updateClientData.pending, handlePending)
      .addCase(updateClientData.fulfilled, (state, action) => {
        state.clientData = action.payload.data;
        state.loading = false;
        state.error = null;
      })
      .addCase(updateClientData.rejected, handleRejected)
      .addCase(deleteClientAppointment.pending, handlePending)
      .addCase(deleteClientAppointment.fulfilled, (state, action) => {
        console.log("into slice: ", action.payload.data);

        state.clientData = action.payload.data;
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteClientAppointment.rejected, handleRejected);
  },
});

export const clientsReducer = clientsSlice.reducer;
