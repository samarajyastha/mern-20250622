import { GRID_VIEW, LIST_VIEW } from "@/constants/productView";
import { DARK_THEME, LIGHT_THEME } from "@/constants/theme";

const { createSlice } = require("@reduxjs/toolkit");

const userPreferencesSlice = createSlice({
  name: "userPreferences",
  initialState: {
    theme: LIGHT_THEME,
    productView: GRID_VIEW,
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme == LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
    },
    toggleProductView: (state) => {
      state.productView =
        state.productView == GRID_VIEW ? LIST_VIEW : GRID_VIEW;
    },
  },
});

export const { toggleTheme, toggleProductView } = userPreferencesSlice.actions;

export default userPreferencesSlice.reducer;
