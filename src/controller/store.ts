import { configureStore } from '@reduxjs/toolkit';
import bottomSheetSlice from './BottomSheetController';
import USER from './UserController';
import FeedsSlice from './FeedsController';
import FieldSlice from './createPost';
import SearcPostSlice from './SearchPost';
import COMMUNITY from './CommunityController';
import CommunitySettingsSlice from './CommunitySettings';
export const store = configureStore({
  reducer: {
    bottomSheetController: bottomSheetSlice,
    USER,
    FeedsSliceController: FeedsSlice,
    CreatePostController: FieldSlice,
    SearchPostController: SearcPostSlice,
    COMMUNITY,
    CommunitySettingsController: CommunitySettingsSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
