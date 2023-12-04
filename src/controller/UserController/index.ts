import { images } from "./../../constants/images";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ImageSourcePropType } from "react-native";
import { communities, friends } from "./models";
import { didToken, BACKEND_URL } from "../../../config/env";
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
  id: number;
  name: string;
  image: string;
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
    referralCode: string;
    socialInfo: any;
  };
  errors: {
    nicknameError: boolean;
    usernameError: boolean;
    emailError: boolean;
    usernameErrorMessage: string;
  };
  didToken: string;
  accountInfo: any;
  metadata: any;
  editProfile: boolean;
  listOfNft: NftCollection[];
  selectedSuperStars: {
    uri: string;
    id: string;
  }[];
  selectedSuperStar: {
    uri: string;
    id: string;
  }[];
  bio: string;
  theirProfileBottomSheet: boolean;
}

interface signUpRequest {
  aptosWallet: string;
  nickname: string;
  username: string;
  email: string;
}

interface getNFTRequest {
  walletAddress: string;
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
    referralCode: "",
    socialInfo: {}
  },
  errors: {
    nicknameError: false,
    usernameError: false,
    emailError: false,
    usernameErrorMessage: "",
  },
  didToken: didToken,
  editProfile: false,
  listOfNft:
    [
      {
        image: "",
        id: 1,
        name: "NFT"
      },
    ],
  accountInfo: undefined,
  metadata: undefined,
  selectedSuperStars: [],
  selectedSuperStar: [],
  bio: `🖇️ Love everything about blockchain \n🌍3 web3 Native \n 👀 Always on a lookout for blue chips`,
  theirProfileBottomSheet: false,
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
  
  export const getNftList = createAsyncThunk(
    "User/getNFT",
    async ( getNFTRequest : getNFTRequest, thunkAPI) => {
    const { walletAddress } = getNFTRequest;
    try {
      const bodydata = {
        wallet: walletAddress,
        limit: 1,
        offset: 1
      }
      const result = await axios.post(`${BACKEND_URL}activity/get_nft_list`, bodydata);
      const tokenIds: string[] = result.data.result.map((item, index) => item.token_data_id_hash);
      const res = await axios.post(`${BACKEND_URL}activity/get_nft_metadadta`, { ids: tokenIds });
      const fetchPromises = res.data.map((item, index) => {
        const imageExtensions = /\.(jpe?g|png|gif|bmp|tiff|webp|svgz?|ico)$/i;
        const hasImageExtension = imageExtensions.test(item.metadata_uri);
        if (hasImageExtension) {
          return Promise.resolve({
            id: index + 1,
            name: item.name,
            image: item.metadata_uri,
          });
        } else {
          return fetch(item.metadata_uri.replace("ipfs://", "https://ipfs.io/ipfs/"))
            .then(response => response.json())
            .then(data => ({
              id: index + 1,
              name: data.name,
              image: data.image,
            }))
            .catch(error => {
              return thunkAPI.rejectWithValue(error);
            });
        }
      });
      const metadataList = await Promise.all(fetchPromises);

      thunkAPI.dispatch(updatelistOfNft(metadataList));
      
    } catch (error) {
      console.error(error);
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
    updateEmail: (state, action: PayloadAction<string>) => {
      if (state.details.email.length >= 70) {
        state.details.email = action.payload;
        state.errors.emailError = true;
      } else {
        state.details.email = action.payload;
        state.errors.emailError = false;
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
    updateReferralCode: (state, action: PayloadAction<string>) => {
      state.details.referralCode = action.payload;
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
    updateEmailError: (state, action: PayloadAction<boolean>) => {
      state.errors.emailError = action.payload;
    },
    updateUsernameError: (state, action) => {
      state.errors.usernameError = action.payload;
    },
    updateProfileImage: (state, action: PayloadAction<string>) => {
      state.details.profileImage = action.payload;
    },
    updatelistOfNft: (state, action: PayloadAction<NftCollection[]>) => {
      state.listOfNft = action.payload;
    },
    updateDidToken: (state, action: PayloadAction<string>) => {
      state.didToken = action.payload;
    },
    updateEditProfile: (state, action: PayloadAction<boolean>) => {
      state.editProfile = action.payload;
    },
    updateSelectedSuperStars: (
      state,
      action: PayloadAction<{ uri: string; id: string }[]>
    ) => {
      state.selectedSuperStars = action.payload;
    },

    updateAccountInfo: (state, action: PayloadAction<any>) => {
      state.accountInfo = action.payload;
    },
    updateSocialconnect: (state, action: PayloadAction<any>) => {
      state.details.socialInfo = action.payload;
    },
    updateMetadata: (state, action: PayloadAction<any>) => {
      state.metadata = action.payload;
    },
    updateSelectedSuperStar: (
      state,
      action: PayloadAction<{ uri: string; id: string }>
    ) => {
      state.selectedSuperStar = [...state.selectedSuperStar, action.payload];
    },
    deleteSelectedSuperStar: (state, action: PayloadAction<string>) => {
      state.selectedSuperStar = state.selectedSuperStar.filter(
        (obj) => obj["id"] !== action.payload
      );
    },
    resetSelectedSuperStar: (state) => {
      state.selectedSuperStar = [];
    },
    updateBio: (state, action: PayloadAction<string>) => {
      state.bio = action.payload;
    },
    updateTheirProfileBottomSheet: (state, action: PayloadAction<boolean>) => {
      state.theirProfileBottomSheet = action.payload;
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
  updateEmail,
  updateUsername,
  updateFollowedFriends,
  updatelistOfNft,
  updateJoinedCommunities,
  updateNicknameError,
  updateUsernameError,
  updateEmailError,
  updateDidToken,
  updateProfileImage,
  updateEditProfile,
  updateAccountInfo,
  updateMetadata,
  updateSocialconnect,
  updateSelectedSuperStar,
  deleteSelectedSuperStar,
  resetSelectedSuperStar,
  updateBio,
  updateTheirProfileBottomSheet,
  updateSelectedSuperStars,
  updateReferralCode,
} = USER.actions;
export default USER.reducer;
