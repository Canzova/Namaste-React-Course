import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    show: false,
  },
  reducers: {
    toggleUser: (state) => {
      state.show = !state.show;
    },
  },
});
export const {toggleUser} = gptSlice.actions;
export default gptSlice.reducer;