import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export enum VerifyCommunityState {
  NOT_APPROVED,
  PENDING,
  APPROVED,
}

export enum InviteStatus {
  NOT_INVITED,
  INVITE_PENDING,
  INVITE_ACCEPTED,
}
interface User {
  name: string;
  username: string;
  id: string;
}

interface CommunityUserData {
  id: number;
  userData: {
    name: string;
    username: string;
  };
  InviteState: InviteStatus;
}

interface CommunityState {
  communityData: Array<CommunityUserData>;
  verificationStatus: VerifyCommunityState;
  invitedMembers: Array<Number>;
  communityMembers: Array<Number>;
  inviteSent: boolean;
  createChannelBottomSheetVisibility: boolean;
  members: User[];
  channelName: string[];
  hasCreatedCommunity: boolean;
}

const initialState: CommunityState = {
  communityData: [
    {
      id: 1,
      userData: {
        name: 'User Name',
        username: '@web3_guru',
      },
      InviteState: InviteStatus.NOT_INVITED,
    },
    {
      id: 2,
      userData: {
        name: 'User Name',
        username: '@web3_guru',
      },
      InviteState: InviteStatus.NOT_INVITED,
    },
    {
      id: 3,
      userData: {
        name: 'User Name',
        username: '@web3_guru',
      },
      InviteState: InviteStatus.NOT_INVITED,
    },
    {
      id: 4,
      userData: {
        name: 'User Name',
        username: '@web3_guru',
      },
      InviteState: InviteStatus.NOT_INVITED,
    },
    {
      id: 5,
      userData: {
        name: 'User Name',
        username: '@web3_guru',
      },
      InviteState: InviteStatus.NOT_INVITED,
    },
  ],
  verificationStatus: VerifyCommunityState.NOT_APPROVED,
  invitedMembers: [],
  communityMembers: [],
  inviteSent: false,
  createChannelBottomSheetVisibility: false,
  members: [],
  channelName: [],
  hasCreatedCommunity: false,
};

export const COMMUNITY = createSlice({
  name: 'Community',
  initialState,
  reducers: {
    updateVerificationStatus: (
      state,
      action: PayloadAction<VerifyCommunityState>
    ) => {
      state.verificationStatus = action.payload;
    },
    addInviteMembers: (state, action: PayloadAction<Number>) => {
      state.invitedMembers = [...state.invitedMembers, action.payload];
    },
    removeInviteMembers: (state, action: PayloadAction<Number>) => {
      const newInviteMembers = state.invitedMembers.filter(
        (id) => id != action.payload
      );
      state.invitedMembers = newInviteMembers;
    },
    clearInviteMembers: (state) => {
      state.invitedMembers = [];
    },
    sendInvite: (state) => {
      for (let i = 0; i < state.invitedMembers.length; i++) {
        const userData = state.communityData.find(
          (data) => data.id == state.invitedMembers[i]
        );
        const newCommunityData = state.communityData.filter(
          (data) => data.id != state.invitedMembers[i]
        );
        userData.InviteState = InviteStatus.INVITE_PENDING;
        state.communityData = [userData, ...newCommunityData];
      }
      state.invitedMembers = [];
      state.inviteSent = true;
    },
    updateCreateChannelBottomSheetVisibility: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.createChannelBottomSheetVisibility = action.payload;
    },
    updateMembers: (state, action: PayloadAction<User>) => {
      const memberExist = state.members.find(
        (member) => member.id === action.payload.id
      );
      if (memberExist) {
        state.members = state.members.filter(
          (member) => member.id !== action.payload.id
        );
      } else {
        state.members = [...state.members, action.payload];
      }
    },
    updateChannelName: (state, action: PayloadAction<string>) => {
      state.channelName = [...state.channelName, action.payload];
    },
    updateHasCreatedCommunity: (state, action: PayloadAction<boolean>) => {
      state.hasCreatedCommunity = action.payload;
    },
  },
});

export const {
  updateVerificationStatus,
  addInviteMembers,
  removeInviteMembers,
  clearInviteMembers,
  sendInvite,
  updateCreateChannelBottomSheetVisibility,
  updateMembers,
  updateChannelName,
  updateHasCreatedCommunity,
} = COMMUNITY.actions;
export default COMMUNITY.reducer;
