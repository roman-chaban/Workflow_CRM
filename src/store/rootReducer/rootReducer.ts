import { combineReducers } from '@reduxjs/toolkit';
import { PersistPartial } from 'redux-persist/es/persistReducer';
import NavSlice from '../slices/NavSlice';
import FilterBoardSlice from '../slices/FiltersBoardSlice';
import EmployeesNavSlice from '../slices/EmployeesNavSlice';

const rootReducer = combineReducers({
  navSlice: NavSlice,
  filterSlice: FilterBoardSlice,
  employeesNav: EmployeesNavSlice,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer> & PersistPartial;
