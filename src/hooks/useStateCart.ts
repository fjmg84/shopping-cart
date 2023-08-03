import { ProductCart } from "../type/products"
import { remove, update } from "../redux/slices/productSlice"
import { useAppDispatch, useAppSelector } from "../redux/stores/hooks"

function useStateCart() {

    const { products } = useAppSelector((state) => state)
    const { cart } = products

    const dispatch = useAppDispatch()



    const updateProduct = (product: ProductCart) => {
        dispatch(update(product))
    }

    const removeProduct = (id: number) => {
        dispatch(remove(id))
    }



    return { cart, removeProduct, updateProduct }
}

export default useStateCart