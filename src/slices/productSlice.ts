import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../stores/store";

// Define a type for the slice state
interface ProductState {
  id: number;
  image: undefined | string;
  name: string;
  price: number;
  count: number;
}

// Define the initial state using that type
const initialState: ProductState[] = [
  {
    id: 1,
    image: undefined,
    name: "Hamburguesa",
    price: 12.0,
    count: 0,
  },
  {
    id: 2,
    image: undefined,
    name: "Shandwich Cubano",
    price: 12.0,
    count: 0,
  },
];

export const productsSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    increment: (state, action) => {
      state.filter(
        (product) => product.id === action.payload && product.count++
      );
    },
    decrement: (state, action) => {
      state.filter(
        (product) =>
          product.id === action.payload && product.count > 0 && product.count--
      );
    },
    reset: (state, action) => {
      state.map((product) =>
        product.id === action.payload ? (product.count = 0) : product
      );
    },
  },
});

export const { increment, decrement, reset } = productsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectProduct = (state: RootState) => state.products;

export default productsSlice.reducer;
