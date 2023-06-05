import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ImageSourcePropType } from 'react-native';
import { communities, friends } from './models';
import { bottomSheetSlice } from '../BottomSheetController';
import axios from 'axios';
interface UserState {
  details: {
    userId:string
    TypeOfWallet: string;
    Nickname: string;
    username: string;
    email:string
    followedFriends: friends[];
    joinedCommunities: communities[];
    profileImage:any
  },
  errors: {
    nicknameError: boolean;
    usernameError: boolean;
    usernameErrorMessage: string;
  };
}

interface ReqBody{
  aptosWallet:string
  nickname:string
  username:string
  email:string
}
const initialState: UserState = {
  details: {
    userId:"",
    TypeOfWallet: '',
    Nickname: '',
    username: '',
    email:"",
    followedFriends: [],
    joinedCommunities: [],
    profileImage:undefined
  },
  errors: {
    nicknameError: false,
    usernameError: false,
    usernameErrorMessage: '',
  },
};





export const signUp = createAsyncThunk("User/signUp", async(reqbody:ReqBody, thunkAPI) => {
  const {aptosWallet, nickname, username, email} = reqbody;
 try {
   const res = await axios.post(`${process.env.BASE_URL}/user`,{
    aptosWallet,
    nickname,
    username,
    email
  })
  return res.data
 } catch (error) {
  return thunkAPI.rejectWithValue(error)
 }
})


export const USER = createSlice({
  name: 'User',
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
          'Use only alphanumeric characters and letters';
      } else if (action.payload.length < 4) {
        state.errors.usernameError = true;
        state.details.username = action.payload;
        state.errors.usernameErrorMessage =
          'Username must be longer than 4 characters';
      } else if (state.details.username.length >= 15) {
        state.errors.usernameError = true;
        state.details.username = action.payload;
        state.errors.usernameErrorMessage =
          'Username can be max. 15 characters long';
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
    updateProfileImage: (state, action:PayloadAction<string>) => {
      state.details.profileImage = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        const userId = action.payload;
        state.details.userId = userId
      })
  }
});
export const {
  updateTypeOfWallet,
  updateNickname,
  updateUsername,
  updateFollowedFriends,
  updateJoinedCommunities,
  updateNicknameError,
  updateUsernameError,
  updateProfileImage
} = USER.actions;
export default USER.reducer;
