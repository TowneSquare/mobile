import { configureStore } from '@reduxjs/toolkit';
import bottomSheetSlice from './BottomSheetController';
import COMMUNITY from './CommunityController';
import DM from './DMController';
import FeedsSlice from './FeedsController';
import Reward from './RewardController';
import SearcPostSlice from './SearchPost';
import Swap from './SwapController';
import USER from './UserController';
import CreatePostSlice from './createPost';
import socketReducer from './initializesocket';
export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    bottomSheetController: bottomSheetSlice,
    USER,
    FeedsSliceController: FeedsSlice,
    CreatePostController: CreatePostSlice,
    SearchPostController: SearcPostSlice,
    COMMUNITY,
    RewardController: Reward,
    SwapController: Swap,
    socket: socketReducer,
    DMController: DM,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
