import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { AssetsData } from '../UserController/models';
interface NftCollection {
  nftImageUrl?: any;
  nftCollection?: string;
  nftTokenId?: number;
}

interface initialStateProps {
  isBottomSheetOpen: boolean;
  uploadImageModalOpen: boolean;
  uploadModalRenderCount: number;
  NftModalOpen: boolean;
  NFTRender: number;
  selectedCollectionModal: boolean;
  selectedRender: number;
  profilePics: {
    image: any;
    name: string;
    id: string;
  };
  listOfNftCollections: AssetsData[];
  superStarBottomSheet: boolean;
  verificationModal: boolean;
  handleTransactiondetailBottomsheet: {
    visibility: boolean;
    dex?: {
      name: string;
      dexImage: string;
    };
    type: 'token_swap' | 'token_transfer' | undefined;
  };
  selectUserBottomsheet: {
    visibility: boolean;
    selectedUser: {
      name: string;
      username: string;
      profilePicsUri: string;
      address: string;
      receiverId: string;
    };
  };
  islogoutBottomsheetVisibile: boolean;
  viewProfileBottomsheetVisibility: boolean;
}
const initialState: initialStateProps = {
  isBottomSheetOpen: false,
  uploadImageModalOpen: false,
  uploadModalRenderCount: 0,
  NftModalOpen: false,
  NFTRender: 0,
  selectedCollectionModal: false,
  selectedRender: 0,
  profilePics: {
    image: undefined,
    name: '',
    id: '',
  },
  listOfNftCollections: [],
  superStarBottomSheet: false,
  verificationModal: false,
  handleTransactiondetailBottomsheet: {
    visibility: false,
    dex: {
      name: '',
      dexImage: '',
    },
    type: undefined,
  },
  selectUserBottomsheet: {
    visibility: false,
    selectedUser: {
      name: '',
      username: '',
      profilePicsUri: '',
      address: '',
      receiverId: '',
    },
  },
  islogoutBottomsheetVisibile: false,
  viewProfileBottomsheetVisibility: false,
};

export const bottomSheetSlice = createSlice({
  name: 'BottomSheet',
  initialState,
  reducers: {
    updateBottomSheet: (state, action: PayloadAction<boolean>) => {
      state.isBottomSheetOpen = action.payload;
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
    updateSuperStarBottomSheet: (state, action: PayloadAction<boolean>) => {
      state.superStarBottomSheet = action.payload;
    },
    updateVerificationModal: (state, action: PayloadAction<boolean>) => {
      state.verificationModal = action.payload;
    },
    updateListOfNFTCollection: (state, action: PayloadAction<AssetsData[]>) => {
      state.listOfNftCollections = action.payload;
    },
    // updateNotFoundModal: (state, action: PayloadAction<boolean>) => {
    //   state.notFoundModal = action.payload;
    // },
    updateTransactionDetailsBottomsheet: (
      state,
      action: PayloadAction<{
        visibility: boolean;
        dex?: {
          name: string;
          dexImage: string;
        };
        type: 'token_swap' | 'token_transfer' | undefined;
      }>
    ) => {
      state.handleTransactiondetailBottomsheet = action.payload;
    },
    updateSelectUserBottomsheet: (
      state,
      action: PayloadAction<{
        visibility: boolean;
        selectedUser?: {
          name: string;
          username: string;
          profilePicsUri: string;
          address: string;
          receiverId: string;
        };
      }>
    ) => {
      state.selectUserBottomsheet.visibility = action.payload.visibility;
      if (action.payload.selectedUser) {
        state.selectUserBottomsheet.selectedUser = action.payload.selectedUser;
      }
    },
    updateLogoutBottomSheetVisibility: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.islogoutBottomsheetVisibile = action.payload;
    },
    updateViewProfileBottomsheetVisibility: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.viewProfileBottomsheetVisibility = action.payload;
    },
  },
});
export const {
  updateBottomSheet,
  updateUploadImageModalOpen,
  updateUploadModalRenderCount,
  updateNftOpen,
  updateNftRender,
  updateSelectedCollection,
  updateSelectedRender,
  updateProfilePics,
  updateSuperStarBottomSheet,
  updateVerificationModal,
  updateTransactionDetailsBottomsheet,
  updateSelectUserBottomsheet,
  updateLogoutBottomSheetVisibility,
  updateListOfNFTCollection,
  updateViewProfileBottomsheetVisibility
} = bottomSheetSlice.actions;

export default bottomSheetSlice.reducer;

const listOfNftCollections = (state: RootState) =>
  state.bottomSheetController.listOfNftCollections;

export const nftAssets = createSelector(
  [listOfNftCollections],
  (listOfNftCollections) => listOfNftCollections
);
