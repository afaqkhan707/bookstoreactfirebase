import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isLoggedIn: false,
  },
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = !!payload;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
