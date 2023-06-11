import { createSlice } from "@reduxjs/toolkit";

// initialise cart to empty 
const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // add to cart
    addToCart: (state, action) => {
      console.log(action.payload)
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    // remove item from cart
    removeItem: (state,action) => {
      state.products=state.products.filter(item=>item.id !== action.payload)
    },

    // reset the cart
    resetCart: (state) => {
      state.products = []
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart,removeItem,resetCart } = cartSlice.actions;

export default cartSlice.reducer;
