import { createSlice } from '@reduxjs/toolkit';

import { isOpenedModal } from '@/app/employees/page';

interface EmployeesNavSliceProps {
  isOpened: isOpenedModal;
}

const initialState: EmployeesNavSliceProps = {
  isOpened: false,
};

const EmployeesNavSlice = createSlice({
  name: 'EmployeesNav',
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isOpened = !state.isOpened;
    },
    closeModal: (state) => {
      state.isOpened = false;
    },
  },
});

export const { toggleModal, closeModal } = EmployeesNavSlice.actions;
export default EmployeesNavSlice.reducer;
