import { combineReducers } from "@reduxjs/toolkit";
import { PersistPartial } from "redux-persist/es/persistReducer";
import NavSlice from "../slices/NavSlice";
import FilterBoardSlice from "../slices/FiltersBoardSlice";
import EmployeesNavSlice from "../slices/EmployeesNavSlice";
import CustomersSlice from "@/store/slices/CustomersSlice";
import EmployeesSlice from "@/store/slices/EmployeesSlice";
import EventsSlice from "@/store/slices/EventsSlice";

const rootReducer = combineReducers({
  navSlice: NavSlice,
  filterSlice: FilterBoardSlice,
  employeesNav: EmployeesNavSlice,
  employees: EmployeesSlice,
  customers: CustomersSlice,
  events: EventsSlice,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer> & PersistPartial;
