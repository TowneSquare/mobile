import { act } from "react-test-renderer";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export enum VerifyCommunityState {
  NOT_APPROVED,
  PENDING,
  APPROVED,
}

interface CommunityState {
  verificationStatus: VerifyCommunityState;
}

const initialState: CommunityState = {
  verificationStatus: VerifyCommunityState.NOT_APPROVED,
};

export const COMMUNITY = createSlice({
  name: "Community",
  initialState,
  reducers: {
    updateVerificationStatus: (
      state,
      action: PayloadAction<VerifyCommunityState>
    ) => {
      state.verificationStatus = action.payload;
    },
  },
});

export const { updateVerificationStatus } = COMMUNITY.actions;
export default COMMUNITY.reducer;
