import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../stores/store";
import { productInitial } from "../data/products";
import { ListProductState, ProductInOrder } from "../type/products";

export const INITIAL_PRODUCT_SELECTED = {
  id: 0,
  image: undefined,
  name: "",
  price: 0,
  inOrder: false,
  pay: 0,
  count: 0
}

const initialState: ListProductState = {
  productSelected: INITIAL_PRODUCT_SELECTED,
  productList: productInitial,
  productsInOrder: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    selected: (state, action: PayloadAction<number>) => {
      let { productsInOrder, productList } = state
      const productId = action.payload

      const productInOrder = productsInOrder.find(
        ({ id }) => id === productId
      );

      if (productInOrder)
        state.productSelected = productInOrder
      else {
        let productInList = productList.find(
          ({ id }) => id === productId
        );
        if (productInList) {
          state.productSelected = { ...productInList, pay: 0, count: 0 }
        }
      }
    },

    update: (state, action: PayloadAction<ProductInOrder>) => {
      const product = action.payload
      state.productSelected = { ...product }
    },

    remove: (state, action: PayloadAction<number>) => {
      state.productsInOrder = state.productsInOrder.filter(
        (product) => product.id !== action.payload
      );
    },

    addToOrder: (state) => {
      const { productsInOrder, productSelected } = state

      const { id } = productSelected

      const productIndex = productsInOrder.findIndex((product) => product.id === id)

      if (productIndex === -1) {
        productSelected.inOrder = true
        productsInOrder.push(productSelected)
        state.productSelected = INITIAL_PRODUCT_SELECTED
      }

      productsInOrder[productIndex] = { ...productsInOrder[productIndex], ...productSelected }

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
