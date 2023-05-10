import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const newItem = state.items.filter((curr) => +curr.id !== action.payload);
      console.log(action.payload);
      console.log(newItem);
      state.items = newItem;
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});
export const { addItem, clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
