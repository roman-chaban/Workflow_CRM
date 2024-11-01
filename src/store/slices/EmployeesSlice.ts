import EmployeesData from "../../../public/data/employees.json";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Employee } from "@/types/employees";

interface EmployeesState {
  entities: Employee[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error?: string | null;
}

export const initialState: EmployeesState = {
  entities: [],
  loading: "idle",
  error: null,
};

export const fetchEmployees = createAsyncThunk<Employee[]>(
  "employees/fetchByEmployees",
  async (_, thunkAPI) => {
    try {
      if (!EmployeesData || EmployeesData.length === 0) {
        return thunkAPI.rejectWithValue("No employee data found.");
      }
      return EmployeesData as Employee[];
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error instanceof Error
          ? error.message
          : "Failed to fetch employee data.",
      );
    }
  },
);

const EmployeesSlice = createSlice({
  name: "Employees",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEmployees.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(fetchEmployees.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.loading = "succeeded";
      state.error = null;
    });
    builder.addCase(fetchEmployees.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });
  },
});

export default EmployeesSlice.reducer;
