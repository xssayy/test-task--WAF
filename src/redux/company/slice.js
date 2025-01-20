import { createSlice } from "@reduxjs/toolkit";
import {
  bookAppointmentToCompanyAcc,
  createCompany,
  getAllCompanies,
  getCompanyData,
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
  companies: {},
  companyData: {},
  loading: false,
  error: null,
};

const companySlice = createSlice({
  name: "company",
  initialState: usersInitialState,

  extraReducers: (builder) => {
    builder
      .addCase(getCompanyData.pending, handlePending)
      .addCase(getCompanyData.fulfilled, (state, action) => {
        state.companyData = action.payload.data;
        state.loading = false;
        state.error = null;
      })
      .addCase(getCompanyData.rejected, handleRejected)
      .addCase(getAllCompanies.pending, handlePending)
      .addCase(getAllCompanies.fulfilled, (state, action) => {
        state.companies = action.payload.companies;
        state.loading = false;
        state.error = null;
      })
      .addCase(getAllCompanies.rejected, handleRejected)
      .addCase(createCompany.pending, handlePending)
      .addCase(createCompany.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(createCompany.rejected, handleRejected)
      .addCase(bookAppointmentToCompanyAcc.pending, handlePending)
      .addCase(bookAppointmentToCompanyAcc.fulfilled, (state) => {
        console.log("companies slice");
        state.loading = false;
        state.error = null;
      })
      .addCase(bookAppointmentToCompanyAcc.rejected, handleRejected);
  },
});

export const companyReducer = companySlice.reducer;
