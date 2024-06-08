import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptSlice from "./gptSlice";
export default configureStore({
  reducer: {
    user : userSlice,
    movies  : moviesReducer,
    gpt : gptSlice,
  },
});
