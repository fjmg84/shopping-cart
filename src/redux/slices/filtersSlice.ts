import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../stores/store";

export const TYPE_CATEGORY = 'all products'


type FiltersProps = {
    categories: {
        list: string[],
        select: string | null
    },
    price: string | null
}
const initialState: FiltersProps = {
    categories: {
        list: [], select: TYPE_CATEGORY
    },
    price: null
};

export const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        addCategories: (state, action: PayloadAction<string[]>) => {
            state.categories.list = [...action.payload]
        },
        selectCategory: (state, action: PayloadAction<string>) => {
            state.categories.select = action.payload
        },
        changePrice: (state, action: PayloadAction<string>) => {
            state.price = action.payload
        }
    },
});

export const {
    addCategories,
    selectCategory,
    changePrice
} = filtersSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const filters = (state: RootState) => state.filters;

export default filtersSlice.reducer;
