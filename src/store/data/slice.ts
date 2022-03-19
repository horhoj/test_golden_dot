import { createSlice } from '@reduxjs/toolkit';
import { RequestError } from '../types';
import { getErrorData } from '../helpers';
import { DataItem } from '../../types/dataItem';
import { SLICE_NAME } from './types';
import * as thunks from './thunks';

interface InitialState {
  isLoading: boolean;
  error: RequestError | null;
  dataList: DataItem[] | null;
}

const initialState: InitialState = {
  isLoading: false,
  error: null,
  dataList: null,
};

export const { actions, reducer } = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(thunks.getDataFromServer.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.dataList = null;
      })
      .addCase(thunks.getDataFromServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dataList = action.payload;
      })
      .addCase(thunks.getDataFromServer.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = getErrorData(error);
      });
  },
});
