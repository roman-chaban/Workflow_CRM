import { combineReducers } from '@reduxjs/toolkit';
import { PersistPartial } from 'redux-persist/es/persistReducer';
import NavSlice from '../slices/NavSlice';

const rootReducer = combineReducers({
  navSlice: NavSlice,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer> & PersistPartial;
