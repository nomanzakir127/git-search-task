import { combineReducers } from '@reduxjs/toolkit';
import forksReducer from './ForksSlice';

const rootReducer = combineReducers({
  forks: forksReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;