import { useEffect, useState } from "react";
import { useAppSelector } from "../../../redux/stores/hooks";
import { Link } from "react-router-dom";
import ProductCard from "../Card";
import { ProductCart, ProductState } from "../../../type/products";
import useStateCart from "../../../hooks/useStateCart";

const ShowProduct = (product: ProductState) => {
  const [newProduct, setNewProduct] = useState<ProductState>();
  const { cart } = useStateCart();

  useEffect(() => {
    const productFind = cart.find(({ id }) => id === product?.id);
    if (productFind) return setNewProduct(productFind);

    setNewProduct(product);
  }, [product]);

  return (
    <main className="min-h-screen p-5 pb-10 flex items-start justify-center">
      <Link
        to="/"
        className="bg-white w-10 h-10 flex items-center justify-center rounded-full"
      >
        <i className="fa fa-arrow-left"></i>
      </Link>
      Back to home
      {newProduct && (
        <section className="rounded-md max-w-lg bg-white overflow-hidden flex flex-wrap items-center justify-center p-5 gap-10">
          <ProductCard product={newProduct} />
        </section>
      )}
    </main>
  );
};

export default ShowProduct;
