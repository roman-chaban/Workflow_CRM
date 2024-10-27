import { combineReducers } from "@reduxjs/toolkit";
import { PersistPartial } from "redux-persist/es/persistReducer";
import NavSlice from "../slices/NavSlice";
import FilterBoardSlice from "../slices/FiltersBoardSlice";
import EmployeesNavSlice from "../slices/EmployeesNavSlice";
import CustomersSlice from "@/store/slices/CustomersSlice";
import EmployeesSlice from "@/store/slices/EmployeesSlice";

const rootReducer = combineReducers({
  navSlice: NavSlice,
  filterSlice: FilterBoardSlice,
  employeesNav: EmployeesNavSlice,
  employees: EmployeesSlice,
  customers: CustomersSlice,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer> & PersistPartial;
