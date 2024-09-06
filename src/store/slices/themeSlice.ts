import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum LayoutTypes {
  SimpleSideBar,
  DeckedSideBar,
  CollapsedSideBar,
}

interface ThemeState {
  currentLayout: LayoutTypes;
}

const initialState: ThemeState = {
  currentLayout: 0,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setLayout(state, action: PayloadAction<LayoutTypes>) {
      state.currentLayout = action.payload;
    },
  },
});

export const { setLayout } = themeSlice.actions;
export default themeSlice.reducer;
