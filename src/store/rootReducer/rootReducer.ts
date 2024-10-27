import { combineReducers } from "@reduxjs/toolkit";
import { PersistPartial } from "redux-persist/es/persistReducer";
import NavSlice from "../slices/NavSlice";
import FilterBoardSlice from "../slices/FiltersBoardSlice";
import EmployeesNavSlice from "../slices/EmployeesNavSlice";
import EmployeesSlice from "@/store/AsyncThunk/AsyncThunk";
import CustomersSlice from "@/store/slices/CustomersSlice";

const rootReducer = combineReducers({
  navSlice: NavSlice,
  filterSlice: FilterBoardSlice,
  employeesNav: EmployeesNavSlice,
  employees: EmployeesSlice,
  customers: CustomersSlice,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer> & PersistPartial;
