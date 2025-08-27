import { DARK_THEME, LIGHT_THEME } from "@/constants/theme";

const { createSlice } = require("@reduxjs/toolkit");

const userPreferencesSlice = createSlice({
  name: "userPreferences",
  initialState: {
    theme: LIGHT_THEME,
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme == LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
    },
  },
});

export const { toggleTheme } = userPreferencesSlice.actions;

export default userPreferencesSlice.reducer;
