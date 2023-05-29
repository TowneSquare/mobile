import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ImageSourcePropType } from 'react-native';
import { communities, friends } from './models';
import { bottomSheetSlice } from '../BottomSheetController';
interface SignUpDetails {
  details: {
    TypeOfWallet: string;
    Nickname: string;
    username: string;
    followedFriends: friends[];
    joinedCommunities: communities[];
  };
  errors: {
    nicknameError: boolean;
    usernameError: boolean;
    usernameErrorMessage: string;
  };
}
const initialState: SignUpDetails = {
  details: {
    TypeOfWallet: '',
    Nickname: '',
    username: '',
    followedFriends: [],
    joinedCommunities: [],
  },
  errors: {
    nicknameError: false,
    usernameError: false,
    usernameErrorMessage: '',
  },
};
export const signUpSlice = createSlice({
  name: 'SignUp',
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
      console.log(state.details.Nickname);
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
} = signUpSlice.actions;
export default signUpSlice.reducer;
