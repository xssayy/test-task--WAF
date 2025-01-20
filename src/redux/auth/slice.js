import { createSlice } from "@reduxjs/toolkit";
import {
  register,
  logIn,
  logOut,
  refreshUser,
  getCurrentUser,
} from "./operations";

const handlePending = (state) => {
  state.loading = true;
  state.error = false;
};

const handleRejected = (state) => {
  state.loading = false;
  state.error = true;
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    accessToken: null,
    isLoggedIn: false,
    isRefreshing: false,
    loading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.isLoggedIn = true;
        state.loading = false;
        state.error = false;
      })
      .addCase(register.rejected, handleRejected)
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.isLoggedIn = true;
        state.loading = false;
        state.error = false;
      })
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, (state) => {
        state.loading = false;
        state.error = false;
        state.accessToken = null;
        state.isLoggedIn = false;
        state.user = {};
      })
      .addCase(logOut.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to log out";
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.accessToken = action.payload.accessToken;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(getCurrentUser.pending, handlePending)
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(getCurrentUser.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
