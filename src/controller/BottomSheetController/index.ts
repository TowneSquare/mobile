import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
const initialState = {
  isBottomSheetOpen: false,

  renderCount: 0,
};
export const bottomSheetSlice = createSlice({
  name: 'BottomSheet',
  initialState,
  reducers: {
    updateBottomSheet: (state, action: PayloadAction<boolean>) => {
      state.isBottomSheetOpen = action.payload;
    },
    updateRenderCount: (state, action: PayloadAction<number>) => {
      state.renderCount = action.payload;
    },
  },
});
export const { updateBottomSheet, updateRenderCount } =
  bottomSheetSlice.actions;
export default bottomSheetSlice.reducer;
