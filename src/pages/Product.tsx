import ShowProduct from "../components/Products/Show";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductCart } from "../type/products";
import Error from "../components/Common/Error404";
import { useGetProductByIdQuery } from "../redux/queries/products";
import Loading from "../components/Common/Loading";

function Product() {
  const { productId } = useParams();
  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductByIdQuery(productId);

  if (isLoading) return <Loading />;

  if (isError) return <Error message="Product not found" error={404} />;

  return product ? <ShowProduct {...product} /> : "";
}

export default Product;
