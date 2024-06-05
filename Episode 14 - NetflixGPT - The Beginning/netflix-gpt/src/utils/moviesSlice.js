import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    nowPlayingMovieLogo: null,
    PopularMovies : null,
    TopRatedMovies : null,
    traillerVideo : null,
    upcomingMovies : null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addNowPlayingMovieLogo: (state, action) => {
      state.nowPlayingMovieLogo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.PopularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.TopRatedMovies = action.payload;
    },
    addupcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addNowTraillerVideo: (state, action) => {
      state.traillerVideo = action.payload;
    },
  },
});
export const { addNowPlayingMovies, addNowTraillerVideo, addPopularMovies, addTopRatedMovies, addupcomingMovies, addNowPlayingMovieLogo } = moviesSlice.actions;
export default moviesSlice.reducer;
