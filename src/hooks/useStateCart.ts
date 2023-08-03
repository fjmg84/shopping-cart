import { ProductCart } from "../type/products"
import { addToOrder, remove, selected, update } from "../redux/slices/productSlice"
import { useAppDispatch, useAppSelector } from "../redux/stores/hooks"

function useStateCart() {

    const { products } = useAppSelector((state) => state)
    const { cart, product } = products

    const dispatch = useAppDispatch()

    const selectedProduct = (products: ProductCart) => {
        dispatch(selected(products))
    }

    const updateProduct = (product: ProductCart) => {
        dispatch(update(product))
    }

    const removeProduct = (id: number) => {
        dispatch(remove(id))
    }

    const addToCart = () => {
        dispatch(addToOrder())
    }

    return { cart, product, selectedProduct, removeProduct, addToCart, updateProduct }
}

export default useStateCart