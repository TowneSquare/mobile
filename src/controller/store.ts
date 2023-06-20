import { configureStore } from '@reduxjs/toolkit';
import bottomSheetSlice from './BottomSheetController';
import signupSlice from './SignupController';
import FeedsSlice from './FeedsController';
export const store = configureStore({
  reducer: {
    bottomSheetController: bottomSheetSlice,
    USER: signupSlice,
    FeedsSliceController: FeedsSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
