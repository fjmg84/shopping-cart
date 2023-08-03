import { useEffect, useState } from "react";
import Image from "../Common/Image";
import Button from "../Common/Buttons";
import { totalImportToPay } from "../../services/funtion";
import styles from "./styles.module.scss";
import useStateCart from "../../hooks/useStateCart";

const Cart = () => {
  const [totalToPay, setTotalToPay] = useState(0);
  const { cart, removeProduct } = useStateCart();

  useEffect(() => {
    const toPay = totalImportToPay(cart);
    setTotalToPay(toPay);
  }, [cart]);

  return (
    <div className={styles.cart__container}>
      <div className={styles.order}>
        {cart.map((product, item) => {
          const { id, image, price, count } = product;
          return (
            <div key={item} className={styles.order__container}>
              <div className={styles.order__button}>
                <Button
                  handleFunction={() => removeProduct(id)}
                  className={styles.order__close}
                >
                  <img src="/svg/close.svg" alt="/svg/close.svg" />
                </Button>
              </div>

              <div className={styles.order__body}>
                <strong>{count}</strong>
                <Image
                  className={styles.order__image}
                  src={image}
                  alt={image}
                />
              </div>
              <p className={styles.order__to__pay}>${price * count}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.to__pay}>
        <h4>
          to pay: <small>${totalToPay}</small>
        </h4>
      </div>
    </div>
  );
};

export default Cart;
