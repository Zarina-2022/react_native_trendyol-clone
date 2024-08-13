import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthState} from '../../modals/store/interface';
import {getUserInfo, loginUser, logoutUser} from '../actions/authActions';
import { User } from '../../modals/auth/interface';

const initialState: AuthState = {
  isLogin: false,
  pending: false,
  error: null,
  token: null,
  user: null,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoginCheck: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      //   state.isLogin = !!action.payload;
      if (action.payload) {
        state.isLogin = true;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, state => {
        state.pending = true;
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<{token: string}>) => {
          state.isLogin = true;
          state.token = action.payload.token;
          state.pending = false;
        },
      )
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.error.message ?? 'Failed to login';
        state.pending = false;
      })
      .addCase(logoutUser.fulfilled, state => {
        state.isLogin = false;
        state.token = null;
        state.user = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.error = action.error.message ?? 'Failed to logout';
      })
      .addCase(getUserInfo.pending, state => {
        state.pending = true;
      })
      .addCase(
        getUserInfo.fulfilled,
        (state, action: PayloadAction<User>) => {
          state.user = action.payload;
          state.pending = false;
        },
      )
      .addCase(getUserInfo.rejected, (state, action) => {
        state.error = action.error.message ?? 'Failed to fetch user info';
        state.pending = false;
      });
  },
});

export const {userLoginCheck} = AuthSlice.actions;
export default AuthSlice.reducer;
