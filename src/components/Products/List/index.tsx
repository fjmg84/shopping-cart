import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductCart, ProductState } from "../../../type/products";
import Button from "../../Common/Buttons";
import Image from "../../Common/Image";
import Text from "../../Common/Text";
import { createListOutDuplicate } from "../../../services/funtion";
import Rate from "../../Common/Rate";
import styles from "./styles.module.scss";
import useStateCart from "../../../hooks/useStateCart";

type Props = {
  products: ProductState[] | undefined;
};
const ListProduct = ({ products }: Props) => {
  const [productsList, setProductList] = useState<ProductCart[]>([]);
  const { cart, removeProduct } = useStateCart();

  useEffect(() => {
    if (products) {
      const list = createListOutDuplicate({
        array1: products,
        array2: cart,
      });
      setProductList(list);
    }
  }, [products, cart]);

  return (
    <div className={styles.container__product}>
      {productsList.map((product) => {
        const { id, title, price, image, count, rating } = product;
        return (
          <article key={id} className={styles.product}>
            <div className={styles.product__header}>
              <Image className={styles.image} src={image} alt={title} />

              <Text text={`$${price}`} myClassName={styles.price} />
              <div className={styles.rate}>
                <Rate count={rating.rate} />
              </div>
            </div>

            <div className={styles.product__body}>
              <Text text={title} myClassName={styles.title} />
            </div>

            <div className={styles.product__footer}>
              {count > 0 && (
                <>
                  <Button
                    className={`${styles.btn} ${styles.btn_remove}`}
                    handleFunction={() => removeProduct(id)}
                  >
                    <span>remove</span>
                  </Button>
                </>
              )}
              <Link
                className={`${styles.btn} ${styles.btn_add}`}
                to={`product/${id}`}
              >
                <span>{count > 0 ? "edit" : "view"}</span>
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ListProduct;
