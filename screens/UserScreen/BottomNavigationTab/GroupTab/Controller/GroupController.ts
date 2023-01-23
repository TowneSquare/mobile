import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import imageAssets from "../../../../../constants/images";
import { GroupCollectionModel } from "../../../../../Components/Models";
interface Group {
  showSelectionModal: boolean;
  showGroupPrivacyModal: boolean;
  createGroupModal: boolean;
  selectCollectionModal: boolean;
  selectedCollection: SelectedCollectiondata
  privacySettings:SelectedPrivacySetting
  };

export enum GroupPrivacySettings{
  Open="Open",
  Private="Private",
  InviteOnly="Invite Only"
}
interface SelectedCollectiondata{
  name:string,
  image:undefined
}
export interface SelectedPrivacySetting{
  icon:undefined,
  privacy:GroupPrivacySettings
}
const initialState: Group = {
  showGroupPrivacyModal: false,
  showSelectionModal: false,
  createGroupModal: false,
  selectCollectionModal: false,
  selectedCollection: { name: "", image: undefined },
  privacySettings:{icon:imageAssets.unlockIcon, privacy:GroupPrivacySettings.Open}
};
export const GroupController = createSlice({
  name: "GroupController",
  initialState,
  reducers: {
    updateShowGroupPrivacyModal: (state) => {
      state.showGroupPrivacyModal = !state.showGroupPrivacyModal;
    },
    updateShowSelectionModal: (state) => {
      state.showSelectionModal = !state.showSelectionModal;
    },
    updateShowGroupModal: (state) => {
      state.createGroupModal = !state.createGroupModal;
    },
    updateCollectionModal: (state) => {
      state.selectCollectionModal = !state.selectCollectionModal;
    },
    updateSelectedCollection: (
      state,
      action: PayloadAction<SelectedCollectiondata>
    ) => {
      state.selectedCollection = action.payload;
    },
    updatePrivacySettings:(state, action:PayloadAction<GroupPrivacySettings>)=>{
      if (action.payload===GroupPrivacySettings.Open){
        state.privacySettings={icon:imageAssets.unlockIcon, privacy:GroupPrivacySettings.Open}
      }
      if (action.payload===GroupPrivacySettings.InviteOnly){
        state.privacySettings={icon:imageAssets.unlockIcon, privacy:GroupPrivacySettings.InviteOnly}
      }
      if (action.payload===GroupPrivacySettings.Private){
        state.privacySettings={icon:imageAssets.lockIcon, privacy:GroupPrivacySettings.Private}
      }
    }
  },
});
export const {
  updateShowGroupPrivacyModal,
  updateShowGroupModal,
  updateShowSelectionModal,
  updateCollectionModal,
  updateSelectedCollection,
  updatePrivacySettings
} = GroupController.actions;
export default GroupController.reducer;
