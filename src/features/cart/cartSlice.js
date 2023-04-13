import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    showCart: false,
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, name, image, price, quantity = 1 } = action.payload;
      const productInCart = state.cart.findIndex(
        (product) => product.id === id
      );
      if (productInCart !== -1) {
        state.cart[productInCart].quantity += quantity;
      } else {
        const product = { id, name, image, price, quantity };
        state.cart.push(product);
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.filter((product) => product.id !== productId);
    },
    incrementQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.cart.find((product) => product.id === productId);
      product.quantity++;
    },
    decrementQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.cart.find((product) => product.id === productId);
      if (product.quantity === 1) {
        state.cart = state.cart.filter((product) => product.id !== productId);
      } else {
        product.quantity--;
      }
    },
    toggleShowCart: (state) => {
      state.showCart = !state.showCart;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  toggleShowCart,
} = cartSlice.actions;

export default cartSlice.reducer;
