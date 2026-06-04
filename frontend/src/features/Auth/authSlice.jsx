import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./authService";
import { loginUser } from "./authService";
import { logoutUser } from "./authService";

const user = JSON.parse(localStorage.getItem("user")) || {};

const initialState = {
  user: user || null,
  token: user.token || null,
  isAuthenticated: user.token ? true : false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  // reducers: {
  //   setUser: (state, action) => {
  //     state.user = action.payload;
  //   },

  //   setToken: (state, action) => {
  //     state.token = action.payload;

  //     localStorage.setItem("token", action.payload);

  //     state.isAuthenticated = true;
  //   },

  //   logout: (state) => {
  //     state.user = null;
  //     state.token = null;
  //     state.isAuthenticated = false;

  //     localStorage.removeItem("token");
  //   },

  //   setLoading: (state, action) => {
  //     state.loading = action.payload;
  //   },

  //   setError: (state, action) => {
  //     state.error = action.payload;
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.error = action.error;
    });
    builder.addCase(loginUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.error = action.error;
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      state.error = action.error;
    });
  },
});

export default authSlice.reducer;
