import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
interface FeedController {
  ReceiveModalState: boolean;
}
const initialState: FeedController = {
  ReceiveModalState: false,
};
export const FeedsSlice = createSlice({
  name: 'FeedsController',
  initialState,
  reducers: {
    updateReceiveModalState: (state, action: PayloadAction<boolean>) => {
      state.ReceiveModalState = action.payload;
    },
  },
});
export const { updateReceiveModalState } = FeedsSlice.actions;
export default FeedsSlice.reducer;
