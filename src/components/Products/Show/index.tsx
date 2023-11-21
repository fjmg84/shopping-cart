import { useEffect, useState } from "react";
import { useAppSelector } from "../../../redux/stores/hooks";
import { Link } from "react-router-dom";
import ProductCard from "../Card";
import { ProductCart } from "../../../type/products";
import useStateCart from "../../../hooks/useStateCart";


type Props = {
  product: ProductCart | undefined;
};
const ShowProduct = ({ product }: Props) => {
  const [newProduct, setNewProduct] = useState<ProductCart>();
  const { cart } = useStateCart();

  useEffect(() => {
    const productFind = cart.find(({ id }) => id === product?.id);
    if (productFind) return setNewProduct(productFind);

    setNewProduct(product);
  }, [product]);

  return (
    <>
      {newProduct && (
        <>
          <div >
            <div >
              <Link  to="/">
                <i className="fa fa-arrow-left"></i>
              </Link>
              Back to home
            </div>
            <div >
              <ProductCard product={newProduct} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ShowProduct;
