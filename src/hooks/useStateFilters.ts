import { createCategory, filterPrice, selectedCategory } from "../redux/slices/filtersSlice"
import { useAppDispatch, useAppSelector } from "../redux/stores/hooks"

function useStateFilters() {

    const { categories, price } = useAppSelector(state => state.filters)
    const dispatch = useAppDispatch()

    const categoriesList = (categories: string[]) => {
        dispatch(createCategory(categories))
    }

    const categorySelect = (category: string) => {
        dispatch(selectedCategory(category))
    }

    const filterByPrice = (type: string) => {
        dispatch(filterPrice(type))
    }
    return { categories, price, categoriesList, categorySelect, filterByPrice }
}

export default useStateFilters