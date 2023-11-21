import { ProductCart } from "../type/products"
import { remove, update } from "../redux/slices/productSlice"
import { useAppDispatch, useAppSelector } from "../redux/stores/hooks"
import { toast } from "react-toastify";

function useStateCart() {

    const { cart } = useAppSelector((state) => state.products)
    
    const dispatch = useAppDispatch()

    const updateProduct = (product: ProductCart) => {
        dispatch(update(product))
        toast.success("Product updated")
    }

    const removeProduct = (id: number) => {
        dispatch(remove(id))
        toast.warn("Product removed")
    }

    return { cart, removeProduct, updateProduct }
}

export default useStateCart