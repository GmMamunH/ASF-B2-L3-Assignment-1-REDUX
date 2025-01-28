import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideo } from "./videoAPI";

// Thunk for fetching video data
export const fetchVideo = createAsyncThunk("/video/fetchVideo", async (id) => {
  const video = await getVideo(id);
  return video;
});

// Video slice
const videoSlice = createSlice({
  name: "video",
  initialState: {
    video: {
      likes: 0,
      dislikes: 0,
    },
    loading: false,
    error: null,
  },
  reducers: {
    incrementLike(state) {
      state.video.likes ++;
    },
    incrementDislike(state) {
      state.video.dislikes ++;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideo.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.video = action.payload || { likes: 0, dislikes: 0 };
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchVideo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { incrementLike, incrementDislike } = videoSlice.actions;
export default videoSlice.reducer;
