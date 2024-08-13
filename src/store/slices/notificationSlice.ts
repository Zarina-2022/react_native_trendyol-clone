import {createSlice} from '@reduxjs/toolkit';
import {NotificationState} from '../../modals/store/interface';
import {getFirestoreNotifications} from '../actions/notificationActions';

const initialState: NotificationState = {
  notifications: [],
  count: 0,
  pending: false,
  error: null,
};

const NotificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getFirestoreNotifications.pending, state => {
        state.pending = true;
      })
      .addCase(getFirestoreNotifications.fulfilled, (state, action) => {
        state.notifications = action.payload;
        state.pending = false;
      })
      .addCase(getFirestoreNotifications.rejected, (state, action) => {
        state.error = action.error.message ?? 'Failed to notifications';
        state.pending = false;
      });
  },
});

export const {} = NotificationSlice.actions;
export default NotificationSlice.reducer;
