import { configureStore } from "@reduxjs/toolkit";

import authSlice from "@/redux/auth/authSlice";
import userPreferencesSlice from "@/redux/userPreferences/userPreferenceSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    userPreferences: userPreferencesSlice,
  },
});

export { store };
