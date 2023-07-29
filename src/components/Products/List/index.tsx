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
      {productsList.map((product) => {
        const { id, title, price, description, image, count } = product;
        return (
          <div key={id} className={styles.product}>
            <div className={styles.image}>
              <div>
                <Image src={image} alt={title} />
              </div>
            </div>
            <Text text={title} myClassName={styles.title} />
            <Text text={description} />
            <Text text={`$ ${price}`} myClassName={styles.price} />

            {count && count > 0 ? (
              <div className={styles.btn}>
                <Button
                  className={styles.btn_add}
                  handleFunction={() => navigate(`product/${id}`)}
                >
                  <span>edit</span>
                </Button>

                <Button
                  className={styles.btn_remove}
                  handleFunction={() => removeProductOfCart(id)}
                >
                  <span>remove</span>
                </Button>
              </div>
            ) : (
              <div className={styles.btn}>
                <div>
                  <Button
                    className={styles.btn_add}
                    handleFunction={() => navigate(`product/${id}`)}
                  >
                    <span>add</span>
                  </Button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ListProduct;
