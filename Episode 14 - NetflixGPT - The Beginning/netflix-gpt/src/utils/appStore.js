import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesReducer from "./moviesSlice";
export default configureStore({
  reducer: {
    user : userSlice,
    movies  : moviesReducer,
  },
});
