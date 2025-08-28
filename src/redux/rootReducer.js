import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "@/redux/auth/authSlice";
import userPreferencesReducer from "@/redux/userPreferences/userPreferenceSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  userPreferences: userPreferencesReducer,
});

export default rootReducer;
