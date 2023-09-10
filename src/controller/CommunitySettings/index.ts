import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface User {
  name: string;
  username: string;
  id: string;
}
interface Settings {
  members: User[];
}
const initialState: Settings = {
  members: [],
};
export const CommunitySettingsSlice = createSlice({
  name: 'CommunitySettings',
  initialState,
  reducers: {
    updateMembers: (state, action: PayloadAction<User>) => {
      const memberExist = state.members.find(
        (member) => member.id === action.payload.id
      );
      if (memberExist) {
        state.members= state.members.filter((member) => member.id !== action.payload.id);
      } else {
        state.members = [...state.members, action.payload];
      }
    },
  },
});
export const { updateMembers } = CommunitySettingsSlice.actions;
export default CommunitySettingsSlice.reducer;
