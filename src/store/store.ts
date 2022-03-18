import { configureStore } from '@reduxjs/toolkit';
import { appSlice } from './app';
import { dataSlice } from './data';

export const store = configureStore({
  devTools: true,
  reducer: {
    app: appSlice.reducer,
    data: dataSlice.reducer,
  },
});
