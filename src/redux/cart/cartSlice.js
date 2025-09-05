import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      const existingProduct = state.products.find(
        (item) => item._id == product._id
      );

      if (existingProduct) {
        state.products = state.products.map((item) => {
          if (item._id != product._id) return item;

          return {
            ...item,
            quantity: item.quantity + 1,
          };
        });
      } else {
        state.products.push({ ...product, quantity: 1 });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
