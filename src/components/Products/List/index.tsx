import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/stores/hooks";
import { useNavigate } from "react-router-dom";
import { ProductCart, ProductState } from "../../../type/products";
import Button from "../../Common/Buttons";
import Image from "../../Common/Image";
import Text from "../../Common/Text";
import { remove } from "../../../redux/slices/productSlice";
import { createListOutDuplicate } from "../../../services/funtion";
import styles from "./styles.module.scss";
import Rate from "../../Common/Rate";

type Props = {
  products: ProductState[] | undefined;
};
const ListProduct = ({ products }: Props) => {
  const [productsList, setProductList] = useState<ProductCart[]>([]);
  const { cart } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (products) {
      const list = createListOutDuplicate({
        array1: products,
        array2: cart,
      });
      setProductList(list);
    }
  }, [products, cart]);

  const removeProductOfCart = (id: number) => {
    dispatch(remove(id));
  };

  return (
    <div className={styles.container}>
      <section>Filter</section>

      <section className={styles.container__product}>
        {productsList.map((product) => {
          const { id, title, price, description, image, count, rating } =
            product;
          return (
            <article key={id} className={styles.product}>
              <div className={styles.product__header}>
                <div className={styles.image}>
                  <Image src={image} alt={title} />
                </div>
                <Text text={`$${price}`} myClassName={styles.price} />
                <div className={styles.rate}>
                  <Rate count={rating.rate} />
                </div>
              </div>

              <div className={styles.product__body}>
                <Text text={title} myClassName={styles.title} />
                <Text text={description} myClassName={styles.description} />
              </div>

              <div className={styles.product__footer}>
                {count && count > 0 ? (
                  <>
                    <Button
                      className={`${styles.btn} ${styles.btn_add}`}
                      handleFunction={() => navigate(`product/${id}`)}
                    >
                      <span>edit</span>
                    </Button>

                    <Button
                      className={`${styles.btn} ${styles.btn_remove}`}
                      handleFunction={() => removeProductOfCart(id)}
                    >
                      <span>remove</span>
                    </Button>
                  </>
                ) : (
                  <Button
                    className={`${styles.btn} ${styles.btn_add}`}
                    handleFunction={() => navigate(`product/${id}`)}
                  >
                    <span>view</span>
                  </Button>
                )}
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default ListProduct;
