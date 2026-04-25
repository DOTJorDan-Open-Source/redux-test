import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    viewMode: 'grid', // 'grid' or 'list'
  },
  reducers: {
    toggleViewMode: (state) => {
      state.viewMode = state.viewMode === 'grid' ? 'list' : 'grid';
    },
  },
});

export const { toggleViewMode } = uiSlice.actions;
export default uiSlice.reducer;