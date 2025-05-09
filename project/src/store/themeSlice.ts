import { createSlice } from '@reduxjs/toolkit';
import type { ThemeState } from '../types';

const initialState: ThemeState = {
  darkMode: true,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;