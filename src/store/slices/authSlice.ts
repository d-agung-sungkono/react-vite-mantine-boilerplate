import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../@types/user';

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ username: string, password: string }>) {
      state.isAuthenticated = true;
      state.user = { username: action.payload.username, role: 'admin' };
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
