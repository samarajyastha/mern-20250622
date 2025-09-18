import { login, signup } from "@/api/auth";
import { updateUser } from "@/api/users";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await login(data);

      localStorage.setItem("authToken", response.data?.authToken);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      const response = await signup(data);

      localStorage.setItem("authToken", response.data?.authToken);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  "auth/update/user",
  async (data, { rejectWithValue }) => {
    try {
      const response = await updateUser(data.id, data);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);
