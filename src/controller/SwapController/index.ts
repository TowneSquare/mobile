import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface SwapController {
  fromAmount: string;
  toAmount: string;
  isSelectAssetBottomsheetvisible: boolean;
}
const initialState: SwapController = {
  fromAmount: '',
  isSelectAssetBottomsheetvisible: false,
  toAmount: '',
};
export const SwapSlice = createSlice({
  name: 'Swap',
  initialState,
  reducers: {
    updateAmount: (state, action: PayloadAction<string>) => {
      state.fromAmount = action.payload;
      state.toAmount = (parseFloat(action.payload) * 0.2).toString();
    },
    updateSwapAssetBottomsheetVisibility: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.isSelectAssetBottomsheetvisible = action.payload;
    },
  },
});
export const { updateAmount, updateSwapAssetBottomsheetVisibility } =
  SwapSlice.actions;
export default SwapSlice.reducer;
