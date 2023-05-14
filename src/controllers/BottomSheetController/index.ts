import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
const initialState = {
  isBottomSheetOpen: false,
  selectedCollectionSheet: false,
  selectedCollectionSheetRenderCount: 0,
  renderCount: 0,
};
export const bottomSheetSlice = createSlice({
  name: 'BottomSheet',
  initialState,
  reducers: {
    updateBottomSheet: (state) => {
      state.isBottomSheetOpen = !state.isBottomSheetOpen;
    },
    updateRenderCount: (state, action: PayloadAction<number>) => {
      state.renderCount = action.payload;
    },
    updateSelectedSheetRenderCount: (state, action: PayloadAction<number>) => {
      state.selectedCollectionSheetRenderCount = action.payload;
    },
    updateSelectedCollectionSheet: (state) => {
      state.selectedCollectionSheet = !state.selectedCollectionSheet;
    },
  },
});
export const {
  updateBottomSheet,
  updateRenderCount,
  updateSelectedSheetRenderCount,
  updateSelectedCollectionSheet,
} = bottomSheetSlice.actions;
export default bottomSheetSlice.reducer;
