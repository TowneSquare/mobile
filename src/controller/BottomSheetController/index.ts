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
  backgroundOpacity: false,
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
      state.backgroundOpacity = action.payload;
    },
    updateUploadModalRenderCount: (state, action: PayloadAction<number>) => {
      state.uploadModalRenderCount = action.payload;
    },
    updateNftOpen: (state, action: PayloadAction<boolean>) => {
      state.NftModalOpen = action.payload;
      state.backgroundOpacity = action.payload;
    },
    updateNftRender: (state, action: PayloadAction<number>) => {
      state.NFTRender = action.payload;
    },
    updateSelectedCollection: (state, action: PayloadAction<boolean>) => {
      state.selectedCollectionModal = action.payload;
      state.backgroundOpacity = action.payload;
    },
    updateSelectedRender: (state, action: PayloadAction<number>) => {
      state.selectedRender = action.payload;
    },
    updateProfilePics: (state, action: PayloadAction<any>) => {
      state.profilePics = action.payload;
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

} = bottomSheetSlice.actions;

export default bottomSheetSlice.reducer;
