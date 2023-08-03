import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../stores/store";
import { ListProductState, ProductCart } from "../../type/products";



const initialState: ListProductState = {
  cart: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {


    update: (state, action: PayloadAction<ProductCart>) => {
      const product = action.payload
      const { id } = product

      const { cart } = state

      const index = cart.findIndex((product) => product.id === id)

      if (index >= 0) {
        cart[index] = { ...product }
      } else {
        cart.push(product)
      }
    },

    remove: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const {
  remove,
  update
} = productsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectProduct = (state: RootState) => state.products;

export default productsSlice.reducer;
