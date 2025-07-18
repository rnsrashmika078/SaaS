"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Friend } from "@/interface/Types";
interface PostState {
  ws: WebSocket | null;
  chatWith: Friend | null;
}

const initialState: PostState = {
  ws: null,
  chatWith: null,
};

const chatSlicer = createSlice({
  name: "chatSlicer",
  initialState,
  reducers: {
    setChatWith: (state, action: PayloadAction<Friend>) => {
      state.chatWith = action.payload;
    },
    setWebSocket: (state, action: PayloadAction<WebSocket>) => {
      state.ws = action.payload;
    },
  },
});

export const { setChatWith, setWebSocket } = chatSlicer.actions;
export default chatSlicer.reducer;
