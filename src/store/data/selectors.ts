import { RequestError, RootState } from '../types';
import { DataItem } from '../../types/dataItem';

export const getIsLoading = (state: RootState): boolean => state.data.isLoading;

export const getRequestError = (state: RootState): RequestError | null =>
  state.data.error;

export const getDataList = (state: RootState): DataItem[] | null =>
  state.data.dataList;
