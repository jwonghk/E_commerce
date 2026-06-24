import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  username: string | null;
  email: string | null;
  token: string | null; // use token to represent the password to avoid 
  // storing the actual password in local storage for security purpose
}

const loadUser = (): UserState => {
  if (typeof window === 'undefined') {
    return { username: null, email: null, token: null };
  }

  try {
    const stored = localStorage.getItem('currentUser');
    if (!stored) return { username: null, email: null, token: null };
    return JSON.parse(stored) as UserState;
  } catch {
    return { username: null, email: null, token: null };
  }
};

const initialState: UserState = loadUser();

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.token = action.payload.token; // saving the JWT token 
      if (typeof window !== 'undefined') {
        localStorage.setItem('currentUser', JSON.stringify(action.payload));
      }
    },
    clearUser(state) {
      state.username = null;
      state.email = null;
      if (typeof window !== 'undefined') {
        localStorage.removeItem('currentUser');
      }
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
