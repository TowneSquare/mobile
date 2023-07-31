import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
interface FeedController {
  ReceiveModalState: boolean;
  ReportingModal: boolean;
  ReportPostModal: boolean;
  ReportUserModal: boolean;
  BlockUserModal: boolean;
  MyPostPanel: boolean;
  DeleteMyPostPanel: boolean;
}
const initialState: FeedController = {
  ReceiveModalState: false,
  ReportingModal: false,
  ReportPostModal: false,
  ReportUserModal: false,
  BlockUserModal: false,
  MyPostPanel: false,
  DeleteMyPostPanel: false,
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
    updateMyPostPanel: (state, action: PayloadAction<boolean>) => {
      state.MyPostPanel = action.payload;
    },
    updateDeletePostPanel: (state, action: PayloadAction<boolean>) => {
      state.DeleteMyPostPanel = action.payload;
    },
    resetModals: (state) => {
      state.ReceiveModalState = false;
      state.ReportingModal = false;
      state.ReportUserModal = false;
      state.BlockUserModal = false;
      state.MyPostPanel = false;
      state.DeleteMyPostPanel = false;
    },
  },
});
export const {
  updateReceiveModalState,
  updtaeReportingModal,
  updateReportPostModal,
  updateReportUserModal,
  updateBlockUserModal,
  updateMyPostPanel,
  updateDeletePostPanel,
  resetModals
} = FeedsSlice.actions;
export default FeedsSlice.reducer;
