import { combineReducers } from '@reduxjs/toolkit';
import { PersistPartial } from 'redux-persist/es/persistReducer';
import NavSlice from '../slices/NavSlice';
import FilterBoardSlice from '../slices/FiltersBoardSlice';

const rootReducer = combineReducers({
  navSlice: NavSlice,
  filterSlice: FilterBoardSlice,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer> & PersistPartial;
