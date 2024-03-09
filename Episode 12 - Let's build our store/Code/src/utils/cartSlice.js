import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      /**
       * In vanila(Older version of) redux
       * ? We could not mutate/update our state directly
       * ? There we need to return the updated value of our state
       */

      // const newArray = [...state];
      // newArray.items.push(action.payload);
      // return newArray;

      // In Redux-Toolkit have to directly mutating/updating our state and not returning anything
      state.items.push(action.payload)
    },
    removeItems: (state) => {
      state.items.pop();
    },
    clearItems: (state) => {
      //return({items : []});
      state.items.length = 0;
    },
  },
});

export const { addItems, removeItems, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
