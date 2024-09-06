import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LocaleState {
  language: string;
}

const initialState: LocaleState = {
  language: 'en', // Default ke bahasa Inggris
};

const localeSlice = createSlice({
  name: 'locale',
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = localeSlice.actions;
export default localeSlice.reducer;
