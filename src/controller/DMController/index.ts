import { PayloadAction, createSlice } from '@reduxjs/toolkit';
interface Mediamessage {
  id: string;
  createdAt: string;
  message: {
    messageType: 'image' | 'video';
    imageUri: string;
  };
  user: {
    _id: string;
    name: string;
  };
  read: boolean;
  loading: boolean;
}
interface DMState {
  uploadingItems: Mediamessage[];
}

const initialState: DMState = {
  uploadingItems: [],
};
export const DMSlice = createSlice({
  name: 'DM',
  initialState,
  reducers: {
    addUploadingItem(state, action: PayloadAction<Mediamessage>) {
      state.uploadingItems = [...state.uploadingItems, action.payload];
    },
    removeUploadingItem(state, action: PayloadAction<string>) {
      state.uploadingItems = state.uploadingItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});
export const { addUploadingItem, removeUploadingItem } = DMSlice.actions;
export default DMSlice.reducer;
