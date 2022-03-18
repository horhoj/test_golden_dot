import * as selectors from './selectors';
import * as thunks from './thunks';
import { actions, reducer } from './slice';

export const dataSlice = { selectors, actions, thunks, reducer };
