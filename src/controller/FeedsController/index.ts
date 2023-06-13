import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
interface FeedController {
  ReceiveModalState: boolean;
  ReportingModal: boolean;
  ReportPostModal: boolean;
  ReportUserModal: boolean;
  BlockUserModal: boolean;
}
const initialState: FeedController = {
  ReceiveModalState: false,
  ReportingModal: false,
  ReportPostModal: false,
  ReportUserModal: false,
  BlockUserModal: false,
};
export const FeedsSlice = createSlice({
  name: 'FeedsController',
  initialState,
  reducers: {
    updateReceiveModalState: (state, action: PayloadAction<boolean>) => {
      state.ReceiveModalState = action.payload;
    },
    updtaeReportingModal: (state, action: PayloadAction<boolean>) => {
      state.ReportingModal = action.payload;
    },
    updateReportPostModal: (state, action: PayloadAction<boolean>) => {
      state.ReportPostModal = action.payload;
    },
    updateReportUserModal: (state, action: PayloadAction<boolean>) => {
      state.ReportUserModal = action.payload;
    },
    updateBlockUserModal: (state, action: PayloadAction<boolean>) => {
      state.BlockUserModal = action.payload;
    },
  },
});
export const {
  updateReceiveModalState,
  updtaeReportingModal,
  updateReportPostModal,
  updateReportUserModal,
  updateBlockUserModal,
} = FeedsSlice.actions;
export default FeedsSlice.reducer;
