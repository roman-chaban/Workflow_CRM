import { NavItems } from '@/types/projects-nav';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialState: {
  items: NavItems;
  activeItemId: number | null;
} = {
  items: [],
  activeItemId: null,
};

const NavSlice = createSlice({
  name: 'projectsNav',
  initialState: initialState,
  reducers: {
    setNavItems: (state, action: PayloadAction<NavItems>) => {
      state.items = action.payload;
    },

    setActiveItem: (state, action: PayloadAction<number>) => {
      state.activeItemId = action.payload;
    },
  },
});

export const { setNavItems, setActiveItem } = NavSlice.actions;
export default NavSlice.reducer;
