import { useAppDispatch, useAppSelector } from "../redux/stores/hooks";
import ShowProduct from "../components/Products/Show";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductInOrder } from "../type/products";
import { selected } from "../redux/slices/productSlice";
import Error from "../components/Common/Error404";

function Product() {
  const [product, setProduct] = useState<ProductInOrder>();
  const { productList } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const { productId } = useParams();

  useEffect(() => {
    if (productId) {
      const isProduct = productList.find(({ id }) => id === +productId);

      if (isProduct) {
        const { id } = isProduct;
        dispatch(selected(id));
        setProduct({ ...isProduct, pay: 0, count: 0 });
      }
    }
  }, [productId]);

  return product ? (
    <ShowProduct />
  ) : (
    <Error message="Product not found" error={404} />
  );
}

export default Product;
