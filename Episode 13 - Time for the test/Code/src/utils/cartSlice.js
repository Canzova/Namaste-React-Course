import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      const existingElementIndex = state.items.findIndex((item) => {
        return item?.info?.id === action.payload?.info.id;
      });

      if (existingElementIndex >= 0) {
        state.items[existingElementIndex].quantity += 1;
      } else {
        state.items.push(action.payload);
      }
    },

    increaseItems: (state, action) => {
      // If quantity is >1 decrease it by 1
      const index = state.items.findIndex((item) => {
        return item?.info?.id === action.payload?.info?.id;
      });

      state.items[index].quantity += 1;
    },

    decreaseItems: (state, action) => {
      const index = state.items.findIndex((item) => {
        return item?.info?.id === action.payload?.info?.id;
      });
      // If quantity is >1 decrease it by 1
      if (action.payload.quantity > 1) {
        state.items[index].quantity -= 1;
      } else {
        state.items.splice(index, 1);
      }
    },

    clearItems: (state) => {
      //return({items : []});
      state.items.length = 0;
    },
  },
});

export const {
  addItems,
  clearItems,
  increaseItems,
  decreaseItems,
} = cartSlice.actions;
export default cartSlice.reducer;
