
import { images } from "./../../constants/images";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ImageSourcePropType } from "react-native";
import { communities, friends } from "./models";
import { bottomSheetSlice } from "../BottomSheetController";
import axios from "axios";

export interface collection {
  image: string;
  id: number;
  isSelected:boolean;
}
export interface NftCollection {
  Collectionimage?: any;
  collections: collection[];
  Name: string;
  id: string;
}
interface UserState {
  details: {
    userId: string;
    TypeOfWallet: string;
    Nickname: string;
    username: string;
    email: string;
    followedFriends: friends[];
    joinedCommunities: communities[];
    profileImage: any;
  };
  errors: {
    nicknameError: boolean;
    usernameError: boolean;
    usernameErrorMessage: string;
  };
  didToken: string;
  accountInfo: any;  editProfile: boolean;
  NFTCollections: NftCollection[];
}

interface signUpRequest {
  aptosWallet: string;
  nickname: string;
  username: string;
  email: string;
}

interface followRequest {
  fromUserId: string;
  toUserIds: string[];
}
const initialState: UserState = {
  details: {
    userId: "",
    TypeOfWallet: "",
    Nickname: "",
    username: "",
    email: "",
    followedFriends: [],
    joinedCommunities: [],
    profileImage: undefined,
  },
  errors: {
    nicknameError: false,
    usernameError: false,
    usernameErrorMessage: "",
  },
  didToken: "",
  editProfile: false,
  NFTCollections: [
    {
      Collectionimage: images.NftCollection1,
      collections: [
        {
          image: images.pinnedNFT,
          id: 1,
          isSelected:true
        },
        {
          image: images.pinnedNFT_1,
          id: 2,
          isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 3,
        isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 4,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 5,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 6,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 7,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 8,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 9,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 10,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 11,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 12,
         isSelected:false
        },
      ],
      Name: "Aptomingos",
      id: "1",
    },
    {
      Collectionimage: images.NftCollection2,
      collections: [
        {
          image: images.pinnedNFT,
          id: 1,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 2,
         isSelected:false
        },
      ],
      Name: "Aptomingos",
      id: "2",
    },
    {
      Collectionimage: images.NftCollection1,
      collections: [
        {
          image: images.pinnedNFT,
          id: 1,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 2,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 3,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 4,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 5,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 6,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 7,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 8,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 9,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 10,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 11,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 12,
         isSelected:false
        },
      ],
      Name: "Aptos Monkey lorem Ipsumdalr",
      id: "3",
    },
    {
      Collectionimage: images.NftCollection2,
      collections: [
        {
          image: images.pinnedNFT,
          id: 1,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 2,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 3,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 4,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 5,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 6,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 7,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 8,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 9,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 10,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 11,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 12,
         isSelected:false
        },
      ],
      Name: "Aptomingos",
      id: "4",
    },
    {
      Collectionimage: images.NftCollection1,
      collections: [
        {
          image: images.pinnedNFT,
          id: 1,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 2,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 3,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 4,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 5,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 6,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 7,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 8,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 9,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 10,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 11,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 12,
         isSelected:false
        },
      ],
      Name: "Aptos Monkey lorem Ipsumdalr",
      id: "5",
    },
    {
      Collectionimage: images.NftCollection2,
      collections: [
        {
          image: images.pinnedNFT,
          id: 1,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 2,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 3,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 4,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 5,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 6,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 7,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 8,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 9,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 10,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 11,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 12,
         isSelected:false
        },
      ],
      Name: "Aptomingos",
      id: "6",
    },
    {
      Collectionimage: images.NftCollection1,
      collections: [
        {
          image: images.pinnedNFT,
          id: 1,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 2,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 3,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 4,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 5,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 6,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 7,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 8,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 9,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 10,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 11,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 12,
         isSelected:false
        },
      ],
      Name: "Aptos Monkey lorem Ipsumdalr",
      id: "7",
    },
    {
      Collectionimage: images.NftCollection2,
      collections: [
        {
          image: images.pinnedNFT,
          id: 1,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 2,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 3,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 4,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 5,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 6,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 7,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 8,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 9,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 10,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 11,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 12,
         isSelected:false
        },
      ],
      Name: "Aptomingos",
      id: "8",
    },
    {
      Collectionimage: images.NftCollection2,
      collections: [
        {
          image: images.pinnedNFT,
          id: 1,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 2,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 3,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 4,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 5,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 6,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 7,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 8,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 9,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 10,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 11,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 12,
         isSelected:false
        },
      ],
      Name: "Aptomingos",
      id: "9",
    },
    {
      Collectionimage: images.NftCollection1,
      collections: [
        {
          image: images.pinnedNFT,
          id: 1,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 2,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 3,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 4,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 5,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 6,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 7,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 8,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 9,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 10,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 11,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 12,
         isSelected:false
        },
      ],
      Name: "Aptos Monkey lorem Ipsumdalr",
      id: "10",
    },
    {
      Collectionimage: images.NftCollection2,
      collections: [
        {
          image: images.pinnedNFT,
          id: 1,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 2,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 3,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 4,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 5,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 6,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 7,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 8,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 9,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 10,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 11,
         isSelected:false
        },
        {
          image: images.pinnedNFT_1,
          id: 12,
         isSelected:false
        },
      ],
      Name: "Aptomingos",
      id: "11",
    },
  ],
  accountInfo: undefined
};



export const signUp = createAsyncThunk(
  "User/signUp",
  async (signupRequest: signUpRequest, thunkAPI) => {
    const { aptosWallet, nickname, username, email } = signupRequest;
    try {
      const res = await axios.post(`${process.env.BASE_URL}`, {
        aptosWallet,
        nickname,
        username,
        email,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const follow = createAsyncThunk(
  "User/follow",
  async (followRequest: followRequest, thunkAPI) => {
    const { fromUserId, toUserIds } = followRequest;
    try {
      const res = await axios.post(`${process.env.BASE_URL}/follow-friends`, {
        fromUserId: fromUserId,
        toUserIds: toUserIds,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const USER = createSlice({
  name: "User",
  initialState,
  reducers: {
    updateTypeOfWallet: (state, action: PayloadAction<string>) => {
      state.details.TypeOfWallet = action.payload;
    },
    updateNickname: (state, action: PayloadAction<string>) => {
      if (state.details.Nickname.length >= 30) {
        state.details.Nickname = action.payload;
        state.errors.nicknameError = true;
      } else {
        state.details.Nickname = action.payload;
        state.errors.nicknameError = false;
      }
    },
    updateUsername: (state, action: PayloadAction<string>) => {
      const usernameRegex = /^[a-zA-Z0-9]+$/;
      if (
        !usernameRegex.test(action.payload) &&
        state.details.username.length > 1
      ) {
        state.errors.usernameError = true;
        state.details.username = action.payload;
        state.errors.usernameErrorMessage =
          "Use only alphanumeric characters and letters";
      } else if (action.payload.length < 4) {
        state.errors.usernameError = true;
        state.details.username = action.payload;
        state.errors.usernameErrorMessage =
          "Username must be longer than 4 characters";
      } else if (state.details.username.length >= 15) {
        state.errors.usernameError = true;
        state.details.username = action.payload;
        state.errors.usernameErrorMessage =
          "Username can be max. 15 characters long";
      } else {
        state.details.username = action.payload;
        state.errors.usernameError = false;
      }
    },
    updateFollowedFriends: (state, action: PayloadAction<friends>) => {
      state.details.followedFriends = [
        ...state.details.followedFriends,
        action.payload,
      ];
    },
    updateJoinedCommunities: (state, action: PayloadAction<communities>) => {
      state.details.joinedCommunities = [
        ...state.details.joinedCommunities,
        action.payload,
      ];
    },
    updateNicknameError: (state, action: PayloadAction<boolean>) => {
      state.errors.nicknameError = action.payload;
    },
    updateUsernameError: (state, action) => {
      state.errors.usernameError = action.payload;
    },
    updateProfileImage: (state, action: PayloadAction<string>) => {
      state.details.profileImage = action.payload;
    },
    updateDidToken: (state, action: PayloadAction<string>) => {
      state.didToken = action.payload;
    },
    updateEditProfile: (state, action: PayloadAction<boolean>) => {
      state.editProfile = action.payload;
    },
    updateCollectionIsSelected:(state, action: PayloadAction<{collectionId: number, isSelected:boolean}>) => {
    const newArray = [...state.NFTCollections]
    console.log( action.payload.collectionId, action.payload.isSelected, 
      newArray[0].collections.find(c => c.id === action.payload.collectionId)!.isSelected)
    newArray[0].collections.find(c => c.id === action.payload.collectionId)!.isSelected= action.payload.isSelected
    state.NFTCollections = newArray
    
    },
    updateAccountInfo: (state, action: PayloadAction<any>) => {
      state.accountInfo = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, (state, action) => {
      const userId = action.payload;
      state.details.userId = userId;
    });
  },
});
export const {
  updateTypeOfWallet,
  updateNickname,
  updateUsername,
  updateFollowedFriends,
  updateJoinedCommunities,
  updateNicknameError,
  updateUsernameError,
  updateDidToken,
  updateProfileImage,
  updateEditProfile,
  updateCollectionIsSelected,
  updateAccountInfo
} = USER.actions;
export default USER.reducer;
