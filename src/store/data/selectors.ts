import { RootState } from '../types';

export const getIsLoading = (state: RootState): boolean => state.data.isLoading;
