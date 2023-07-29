import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../stores/store";
import { ListProductState, ProductCart } from "../../type/products";

export const INITIAL_PRODUCT_SELECTED = {
  id: 0,
  title: "",
  price: 0,
  description: "",
  category: "",
  image: "",
  rating: {
    rate: 0, count: 0
  },
  count: 0
}

const initialState: ListProductState = {
  product: INITIAL_PRODUCT_SELECTED,
  cart: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    selected: (state, action: PayloadAction<ProductCart>) => {
      state.product = { ...action.payload }
    },

    update: (state, action: PayloadAction<ProductCart>) => {
      const product = action.payload
      state.product = { ...product }
    },

    remove: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload
      );
    },

    addToOrder: (state) => {
      const { cart, product } = state

      const { id, count } = product

      const newCart = cart.filter((product) => product.id !== id)

      if (count && count > 0) {
        state.cart = [...newCart, product]
      } else state.cart = [...newCart]

    },
  },
});

export const {
  selected,
  addToOrder,
  remove,
  update
} = productsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectProduct = (state: RootState) => state.products;

export default productsSlice.reducer;
