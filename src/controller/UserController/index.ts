import { store } from "./../store";

import { images } from "./../../constants/images";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ImageSourcePropType, ImageURISource } from "react-native";
import { communities, friends } from "./models";
import { bottomSheetSlice } from "../BottomSheetController";
import axios from "axios";

export interface collection {
  image: ImageSourcePropType;
  id: number;
  isSelected: boolean;
}

export interface selectedCollection {
  image: ImageSourcePropType;
  collectionId: number;
  itemId: number;
  id: number;
}
export interface NftCollection {
  Collectionimage?: any;
  collections: collection[];
  Name: string;
  id: number;
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
  accountInfo: any;
  editProfile: boolean;
  NFTCollections: NftCollection[];
  selectedCollection: selectedCollection[];
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
          isSelected: false,
        },
        {
          image: images.pinnedNFT_1,
          id: 2,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_2,
          id: 3,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_3,
          id: 4,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_4,
          id: 5,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_5,
          id: 6,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_6,
          id: 7,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_7,
          id: 8,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_8,
          id: 9,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_9,
          id: 10,
          isSelected: false,
        },
      ],
      Name: "Aptomingos",
      id: 1,
    },
    {
      Collectionimage: images.NftCollection2,
      collections: [
        {
          image: images.pinnedNFT_10,
          id: 1,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_11,
          id: 2,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_12,
          id: 3,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_13,
          id: 4,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_14,
          id: 5,
          isSelected: false,
        },
      ],
      Name: "Aptos Monkey",
      id: 2,
    },
    {
      Collectionimage: images.NftCollection3,
      collections: [
        {
          image: images.pinnedNFT_15,
          id: 1,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_16,
          id: 2,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_17,
          id: 3,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_18,
          id: 4,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_19,
          id: 5,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_20,
          id: 6,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_21,
          id: 7,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_22,
          id: 8,
          isSelected: false,
        },
      ],
      Name: "Aptomingos",
      id: 3,
    },
    {
      Collectionimage: images.NftCollection1,
      collections: [
        {
          image: images.pinnedNFT_23,
          id: 1,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_24,
          id: 2,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_25,
          id: 3,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_26,
          id: 4,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_27,
          id: 5,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_28,
          id: 6,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_29,
          id: 7,
          isSelected: false,
        },
      ],
      Name: "Aptos Monkey",
      id: 5,
    },
    {
      Collectionimage: images.NftCollection2,
      collections: [
        {
          image: images.pinnedNFT_30,
          id: 1,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_31,
          id: 2,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_32,
          id: 3,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_33,
          id: 4,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_34,
          id: 5,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_35,
          id: 6,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_36,
          id: 7,
          isSelected: false,
        },
      ],
      Name: "Aptomingos",
      id: 6,
    },
    {
      Collectionimage: images.NftCollection3,
      collections: [
        {
          image: images.pinnedNFT_37,
          id: 1,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_38,
          id: 2,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_40,
          id: 3,
          isSelected: false,
        },
      ],
      Name: "Aptos Monkey lorem Ipsumdalr",
      id: 7,
    },
  ],
  accountInfo: undefined,
  selectedCollection: [],
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
    updateCollectionIsSelected: (
      state,
      action: PayloadAction<{
        collectionId: number;
        itemId: number;
        isSelected: boolean;
      }>
    ) => {
      const newArray = [...state.NFTCollections];
      newArray[action.payload.collectionId - 1].collections.find(
        (c) => c.id === action.payload.itemId
      )!.isSelected = action.payload.isSelected;
      state.NFTCollections = newArray;
      if (action.payload.isSelected == true) {
        state.selectedCollection = [
          ...state.selectedCollection,
          {
            id: state.selectedCollection.length++,
            collectionId: action.payload.collectionId - 1,
            itemId: action.payload.itemId,
            image: newArray[action.payload.collectionId - 1].collections.find(
              (c) => c.id === action.payload.itemId
            ).image,
          },
        ];
      }
      if (action.payload.isSelected == false) {
        const filtered = state.selectedCollection.filter(
          (sel) =>
            sel.image !==
            newArray[action.payload.collectionId - 1].collections.find(
              (c) => c.id === action.payload.itemId
            ).image
        );
        state.selectedCollection = filtered;
      }
    },
    updateSelectedImage: (
      state,
      action: PayloadAction<{ imageSrc: ImageSourcePropType }>
    ) => {
      const filtered = state.selectedCollection.filter(
        (sel) => sel.image != action.payload.imageSrc
      );
      const filter = state.selectedCollection.find(
        (sel) => sel.image == action.payload.imageSrc
      );
      const newArray = [...state.NFTCollections];
      newArray[filter?.collectionId].collections.find(
        (c) => c.id === filter.itemId
      )!.isSelected = false;
      state.NFTCollections = newArray;
      state.selectedCollection = filtered;
    },
    updateAccountInfo: (state, action: PayloadAction<any>) => {
      state.accountInfo = action.payload;
    },
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
  updateAccountInfo,
  updateSelectedImage,
} = USER.actions;
export default USER.reducer;
