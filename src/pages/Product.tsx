import ShowProduct from "../components/Products/Show";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductCart } from "../type/products";
import Error from "../components/Common/Error404";
import { useGetProductByIdQuery } from "../redux/queries/products";
import Loading from "../components/Common/Loading";
//import products from "../data/data.json";

function Product() {
  const [newProduct, setNewProduct] = useState<ProductCart>();
  const { productId } = useParams();
  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductByIdQuery(productId);

  /* useEffect(() => {
    if (productId) {
      const productDisplay = products.find(
        (product) => product.id === +productId
      );
      if (productDisplay) setNewProduct({ ...productDisplay, count: 0 });
    }
  }, [productId]); */

  useEffect(() => {
    if (product) {
      const prod = { ...product, count: 0 };
      setNewProduct(prod);
    }
  }, [product]);

  if (isLoading) return <Loading />;

  if (isError) return <Error message="Product not found" error={404} />;

  return <ShowProduct product={newProduct} />;
}

export default Product;
