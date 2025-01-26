import { createSlice } from "@reduxjs/toolkit";

const likeDislikeSlices = createSlice({
  name: "likeDislike",
  initialState: {
    likes: 0,
    dislikes: 0,
  },
  reducers: {
    incrementLike(state) {
      state.likes++;
    },
    incrementDislike(state) {
      state.dislikes++;
    },

  },
});

export const { incrementLike, incrementDislike} =
  likeDislikeSlices.actions;

export default likeDislikeSlices.reducer;
