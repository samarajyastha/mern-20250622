import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "@/redux/auth/authSlice";
import productReducer from "@/redux/product/productSlice";
import userPreferencesReducer from "@/redux/userPreferences/userPreferenceSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  userPreferences: userPreferencesReducer,
});

export default rootReducer;
