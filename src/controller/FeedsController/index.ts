import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface FeedController {
  ReceiveModalState: boolean;
  ReportingModal:{
    status:boolean,
    postId:string,
    userId:string
  };
  ReportPostModal: boolean;
  ReportUserModal: boolean;
  BlockUserModal: boolean;
  MyPostPanel: boolean;
  DeleteMyPostPanel: boolean;
  showToast: {
    displayToast: boolean;
    toastMessage: string;
    toastType: 'success' | 'info';
    position?: 'top' | 'bottom';
    alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
  };
  currentTab: string;
  tipBottomSheet: boolean;
  selectedSwipeablePFPId: string;
  AttachNftType: 'createPost' | 'DM';
}
const initialState: FeedController = {
  ReceiveModalState: false,
  ReportingModal: {
    status:false,
    postId:"",
    userId:""
  },
  ReportPostModal: false,
  ReportUserModal: false,
  BlockUserModal: false,
  MyPostPanel: false,
  DeleteMyPostPanel: false,
  showToast: {
    displayToast: false,
    toastMessage: '',
    toastType: 'success',
    position: 'top',
    alignItems: 'center',
  },
  currentTab: 'feed',
  tipBottomSheet: false,
  selectedSwipeablePFPId: '',
  AttachNftType: 'createPost',
};

// export const reportUser = createAsyncThunk("feed/reportUser",async ({user_id, token}:any) => {
//   try {
//     await axios.get(`${BACKEND_URL}user/report/${user_id}`, {
//       headers:{
//         Authorization: token,
//       }
//     })
//   } catch (error) {
    
//   }
// })
export const FeedsSlice = createSlice({
  name: 'FeedsController',
  initialState,
  reducers: {
    updateReceiveModalState: (state, action: PayloadAction<boolean>) => {
      state.ReceiveModalState = action.payload;
    },
    updateReportingModal: (state, action: PayloadAction<{status:boolean, postId:string, userId:string}>) => {
      state.ReportingModal.status = action.payload.status;
      state.ReportingModal.postId = action.payload.postId;
      state.ReportingModal.userId = action.payload.userId
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
      state.ReportingModal = {
        status:false,
        postId:"",
        userId:""
      };
      state.ReportUserModal = false;
      state.BlockUserModal = false;
      state.MyPostPanel = false;
      state.DeleteMyPostPanel = false;
    },
    updateToast: (
      state,
      action: PayloadAction<{
        displayToast: boolean;
        toastMessage: string;
        toastType: 'success' | 'info';
        position?: 'top' | 'bottom';
        alignItems?:
          | 'center'
          | 'flex-start'
          | 'flex-end'
          | 'stretch'
          | 'baseline';
      }>
    ) => {
      state.showToast.displayToast = action.payload.displayToast;
      state.showToast.toastMessage = action.payload.toastMessage;
      state.showToast.toastType = action.payload.toastType;
      state.showToast.position = action.payload.position;
      state.showToast.alignItems = action.payload.alignItems;
    },
    resetToast: (state) => {
      state.showToast.displayToast = false;
      state.showToast.toastMessage = '';
      state.showToast.toastType = 'success';
      state.showToast.position = 'top';
      state.showToast.alignItems = 'center';
    },
    updateCurrentTab: (state, action: PayloadAction<string>) => {
      state.currentTab = action.payload;
    },
    updateTipBottomSheet: (state, action: PayloadAction<boolean>) => {
      state.tipBottomSheet = action.payload;
    },
    updateSelectedSwipeablePFPId: (state, action: PayloadAction<string>) => {
      state.selectedSwipeablePFPId = action.payload;
    },
    updateAttachNftType: (
      state,
      action: PayloadAction<'DM' | 'createPost'>
    ) => {
      state.AttachNftType = action.payload;
    },
  },
});
export const {
  updateReceiveModalState,
  updateReportingModal,
  updateReportPostModal,
  updateReportUserModal,
  updateBlockUserModal,
  updateMyPostPanel,
  updateDeletePostPanel,
  resetModals,
  updateToast,
  resetToast,
  updateCurrentTab,
  updateTipBottomSheet,
  updateSelectedSwipeablePFPId,
  updateAttachNftType,
} = FeedsSlice.actions;
export default FeedsSlice.reducer;
