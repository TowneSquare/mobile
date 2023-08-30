export type SetPFPBottomSheet = {
  isChooseCommunityPFPVisible: boolean;
  setCommunityPFPBottomSheet: (state: boolean) => void;
  isCommunityPFPCollectionBottomSheetVisible: boolean;
  setCommunityPFPCollectionBottomSheet: (state: boolean) => void;
  isSelectedCommunityPFPCollectionBottomSheetVisible: boolean;
  setSelectedCommunityPFPCollectionVisible: (state: boolean) => void;
};
