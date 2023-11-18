import { configureStore } from '@reduxjs/toolkit';
import bottomSheetSlice from './BottomSheetController';
import USER from './UserController';
import FeedsSlice from './FeedsController';
import CreatePostSlice from './createPost';
import SearcPostSlice from './SearchPost';
import COMMUNITY from './CommunityController';
import Reward from './RewardController';
import Swap from './SwapController';
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
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
