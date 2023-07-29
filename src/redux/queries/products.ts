import { BaseQueryFn, FetchArgs, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ProductState } from '../../type/products'


export interface CustomError {
    data: {
        status?: string;
        message?: string;
    }

}
// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),//as BaseQueryFn<string | FetchArgs, unknown, CustomError, {}>,
    endpoints: (builder) => ({
        getProducts: builder.query<ProductState[], void>({
            query: () => `/products`
        }),
        getProductById: builder.query<ProductState, string | undefined>({
            query: (id) => `/products/${id}`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi