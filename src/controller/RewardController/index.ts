import { PayloadAction, createSlice } from '@reduxjs/toolkit';
interface RewardState {
  isRewardInfoBottomsheetVisible: boolean;
  isPointsonHoldBottomsheetVisible: boolean;
  isRulesBottomsheetVisible: boolean;
}
const initialState: RewardState = {
  isRewardInfoBottomsheetVisible: false,
  isPointsonHoldBottomsheetVisible: false,
  isRulesBottomsheetVisible: false,
};
export const Reward = createSlice({
  name: 'Rewardslice',
  initialState,
  reducers: {
    updateRewardBottomsheetVisibility: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.isRewardInfoBottomsheetVisible = action.payload;
    },
    updatePointsonHoldBottomsheetVisibility: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.isPointsonHoldBottomsheetVisible = action.payload;
    },
    updateRulesBottomsheetVisibility: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.isRulesBottomsheetVisible = action.payload;
    },
  },
});
export const {
  updateRewardBottomsheetVisibility,
  updatePointsonHoldBottomsheetVisibility,
  updateRulesBottomsheetVisibility,
} = Reward.actions;
export default Reward.reducer;
