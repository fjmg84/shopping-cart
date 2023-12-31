import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { productsApi } from '../queries/products'
import { productsSlice } from '../slices/productSlice'
import { filtersSlice } from '../slices/filtersSlice'


export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    filters: filtersSlice.reducer,
    [productsApi.reducerPath]: productsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch