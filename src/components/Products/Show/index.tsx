import { useEffect, useState } from "react";
import { useAppSelector } from "../../../redux/stores/hooks";
import { Link } from "react-router-dom";
import ProductCard from "../Card";
import { ProductCart } from "../../../type/products";
import styles from "./styles.module.scss";

type Props = {
  product: ProductCart | undefined;
};
const ShowProduct = ({ product }: Props) => {
  const [newProduct, setNewProduct] = useState<ProductCart>();
  const { cart } = useAppSelector((state) => state.products);

  useEffect(() => {
    const productFind = cart.find(({ id }) => id === product?.id);
    if (productFind) return setNewProduct(productFind);

    setNewProduct(product);
  }, [product]);

  return (
    <>
      {newProduct && (
        <>
          <div className={styles.container}>
            <div className={styles.container__to__back}>
              <Link className={styles.link__to__back} to="/">
                <i className="fa fa-arrow-left"></i>
              </Link>
              Back to home
            </div>
            <div className={styles.product}>
              <ProductCard product={newProduct} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ShowProduct;
