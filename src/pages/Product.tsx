import { useAppDispatch } from "../redux/stores/hooks";
import ShowProduct from "../components/Products/Show";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductCart } from "../type/products";
import Error from "../components/Common/Error404";
import { useGetProductByIdQuery } from "../redux/queries/products";
import { selected } from "../redux/slices/productSlice";
import Loading from "../components/Common/Loading";

function Product() {
  const [newProduct, setNewProduct] = useState<ProductCart>();
  const { productId } = useParams();
  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductByIdQuery(productId);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (product) {
      const prod = { ...product, count: 0 };
      setNewProduct(prod);
      dispatch(selected(prod));
    }
  }, [product]);

  if (isLoading) return <Loading />;

  if (isError) return <Error message="Product not found" error={404} />;

  return <ShowProduct product={newProduct} />;
}

export default Product;
