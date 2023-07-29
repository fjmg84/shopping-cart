import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/stores/hooks";
import Image from "../Common/Image";
import Button from "../Common/Buttons";
import { remove } from "../../redux/slices/productSlice";
import { totalImportToPay } from "../../services/funtion";
import styles from "./styles.module.scss";

const Cart = () => {
  const [totalToPay, setTotalToPay] = useState(0);
  const { cart } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const toPay = totalImportToPay(cart);
    setTotalToPay(toPay);
  }, [cart]);

  const removeProductOfCart = (id: number) => dispatch(remove(id));

  return (
    <>
      <div className={styles.car}>
        <div className={styles.car__container}>
          <div className={styles.order}>
            {cart.map((product, item) => {
              const { id, image, price, count } = product;
              return (
                <div
                  key={item}
                  className={`${styles.order_container} order_${id}`}
                >
                  <Button
                    handleFunction={() => removeProductOfCart(id)}
                    className={styles.order_close}
                  >
                    <img src="/svg/close.svg" alt="/svg/close.svg" />
                  </Button>

                  <div className={styles.order_image}>
                    <span className={styles.order_count}>{count}</span>
                    <Image src={image} alt={image} />
                  </div>
                  <p className={styles.order_to_pay}>${price * count}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.toPay}>
          <h4>
            to pay: <small>${totalToPay}</small>
          </h4>
        </div>
      </div>
    </>
  );
};

export default Cart;
