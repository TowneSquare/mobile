import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ImageSourcePropType } from 'react-native';
const initialState = {
  isBottomSheetOpen: false,
  renderCount: 0,
  uploadImageModalOpen: false,
  uploadModalRenderCount: 0,
  NftModalOpen: false,
  NFTRender: 0,
  selectedCollectionModal: false,
  selectedRender: 0,
  profilePics: {
    image: undefined,
    name: '',
    id: 0,
  },
  notFoundModal: false,
  notFoundRender: 0,
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
    updateUploadImageModalOpen: (state, action: PayloadAction<boolean>) => {
      state.uploadImageModalOpen = action.payload;
    },
    updateUploadModalRenderCount: (state, action: PayloadAction<number>) => {
      state.uploadModalRenderCount = action.payload;
    },
    updateNftOpen: (state, action: PayloadAction<boolean>) => {
      state.NftModalOpen = action.payload;
    },
    updateNftRender: (state, action: PayloadAction<number>) => {
      state.NFTRender = action.payload;
    },
    updateSelectedCollection: (state, action: PayloadAction<boolean>) => {
      state.selectedCollectionModal = action.payload;
    },
    updateSelectedRender: (state, action: PayloadAction<number>) => {
      state.selectedRender = action.payload;
    },
    updateProfilePics: (state, action: PayloadAction<any>) => {
      state.profilePics = action.payload;
    },
    updateNotFoundModal: (state, action: PayloadAction<boolean>) => {
      state.notFoundModal = action.payload;
    },
    updateNotFoundRender: (state, action: PayloadAction<number>) => {
      state.notFoundRender = action.payload;
    },
  },
});
export const {
  updateBottomSheet,
  updateRenderCount,
  updateUploadImageModalOpen,
  updateUploadModalRenderCount,
  updateNftOpen,
  updateNftRender,
  updateSelectedCollection,
  updateSelectedRender,
  updateProfilePics,
  updateNotFoundRender,
  updateNotFoundModal,
} = bottomSheetSlice.actions;

export default bottomSheetSlice.reducer;
