//@ts-nocheck
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import io, { Socket } from 'socket.io-client';

interface InitialState {
  isConnected: boolean;
  socket: Socket | null;
}

const initialState: InitialState = {
  isConnected: false,
  socket: null,
};

export const connectSocket = createAsyncThunk<Socket>(
  'socket/initialize',
  async () => {
    const socket = io('https://dialect-daba.onrender.com/', {
      transports: ['websocket'],
      autoConnect: true,
    });
    return socket;
  }
);
const connectSocketFulfilled = (
  state: InitialState,
  action: PayloadAction<Socket | null>
) => {
  state.isConnected = true;
  if (action.payload) {
    state.socket = action.payload;
  }
};
const socketSlice = createSlice({
  name: 'socket',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(connectSocket.fulfilled, connectSocketFulfilled);
  },
});

export default socketSlice.reducer;
