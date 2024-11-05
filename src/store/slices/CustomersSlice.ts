import CustomersData from '../../../public/data/customers.json';

import { Customers } from '@/types/customers';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type CustomersLoading = string | null;
type CustomersError = string | null;

interface CustomersState {
  customers: Customers;
  loading: CustomersLoading;
  error?: CustomersError;
}

const initialState: CustomersState = {
  customers: [],
  loading: null,
  error: null,
};

export const fetchCustomers = createAsyncThunk<Customers>(
  'customers/fetchCustomers',
  async (_, thunkAPI) => {
    try {
      if (!CustomersData || CustomersData.length === 0) {
        return thunkAPI.rejectWithValue('No customers data found');
      }
      return CustomersData as unknown as Customers;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error instanceof Error ? error.message : 'Failed to fetch customers'
      );
    }
  }
);

const CustomersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCustomers.pending, (state) => {
      state.loading = 'pending';
      state.error = null;
    });
    builder.addCase(fetchCustomers.fulfilled, (state, action) => {
      state.customers = action.payload;
      state.loading = 'succeeded';
      state.error = null;
    });
    builder.addCase(fetchCustomers.rejected, (state, action) => {
      state.loading = 'failed';
      state.error = action.payload as string;
    });
  },
});

export default CustomersSlice.reducer;
