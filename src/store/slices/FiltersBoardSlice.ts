import { createSlice } from '@reduxjs/toolkit';

interface FilterState {
  isOpen: boolean;
}

const initialState: FilterState = {
  isOpen: false,
};

const FilterBoardSlice = createSlice({
  name: 'filterBoard',
  initialState,
  reducers: {
    onOpenFilterBoard: (state) => {
      state.isOpen = true;
    },
    onCloseFilterBoard: (state) => {
      state.isOpen = false;
    },
    toggleFilterBoard: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { onOpenFilterBoard, onCloseFilterBoard, toggleFilterBoard } =
  FilterBoardSlice.actions;

export default FilterBoardSlice.reducer;
