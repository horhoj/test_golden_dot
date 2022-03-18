import * as selectors from './selectors';
import { actions, reducer } from './slice';

export const appSelectors = selectors;

export const appSlice = { actions, selectors, reducer };
