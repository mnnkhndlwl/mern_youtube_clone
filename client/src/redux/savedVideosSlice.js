import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  savedVideos: [],
  loading: false,
  error: false,
};

export const savedVideosSlice = createSlice({
  name: "savedVideos",
  initialState,
  reducers: {
    saveVideo: (state, action) => {
      if (!state.savedVideos.find(video => video._id === action.payload._id)) {
        state.savedVideos.push(action.payload);
      }
    },
    unsaveVideo: (state, action) => {
      state.savedVideos = state.savedVideos.filter(
        video => video._id !== action.payload
      );
    },
    setSavedVideos: (state, action) => {
      state.savedVideos = action.payload;
    },
  },
});

export const { saveVideo, unsaveVideo, setSavedVideos } = savedVideosSlice.actions;

export default savedVideosSlice.reducer; 