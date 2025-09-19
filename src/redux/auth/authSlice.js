import { loginUser, registerUser, updateUserProfile } from "./authActions";

const { createSlice } = require("@reduxjs/toolkit");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    logoutUser: (state) => {
      state.user = null;

      localStorage.removeItem("authToken");
    },

    resetSuccess: (state) => {
      state.success = false;
    },

    updateUser: (state, action) => {
      state.user = { ...state.user, profileImageUrl: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.user = action.payload;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logoutUser, resetSuccess, updateUser } = authSlice.actions;

export default authSlice.reducer;

/**
 * Thunk actions => async process
 * 3 states:
 * 1. Pending -> loading
 * 2. Fulfilled -> success
 * 3. Rejected -> error
 *
 * used in extraReducers
 *
 */
