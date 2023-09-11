import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

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
  inviteSent:boolean
}

const initialState: CommunityState = {
  communityData: [
    {
      id: 1,
      userData: {
        name: "User Name",
        username: "@web3_guru",
      },
      InviteState: InviteStatus.NOT_INVITED,
    },
    {
      id: 2,
      userData: {
        name: "User Name",
        username: "@web3_guru",
      },
      InviteState: InviteStatus.NOT_INVITED,
    },
    {
      id: 3,
      userData: {
        name: "User Name",
        username: "@web3_guru",
      },
      InviteState: InviteStatus.NOT_INVITED,
    },
    {
      id: 4,
      userData: {
        name: "User Name",
        username: "@web3_guru",
      },
      InviteState: InviteStatus.NOT_INVITED,
    },
    {
      id: 5,
      userData: {
        name: "User Name",
        username: "@web3_guru",
      },
      InviteState: InviteStatus.NOT_INVITED,
    },
  ],
  verificationStatus: VerifyCommunityState.NOT_APPROVED,
  invitedMembers: [],
  communityMembers: [],
  inviteSent:false
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
      state.inviteSent = true
    },
  },
});

export const {
  updateVerificationStatus,
  addInviteMembers,
  removeInviteMembers,
  clearInviteMembers,
  sendInvite,
} = COMMUNITY.actions;
export default COMMUNITY.reducer;