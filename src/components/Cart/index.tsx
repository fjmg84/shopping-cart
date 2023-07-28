import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useAppDispatch, useAppSelector } from "../../stores/hooks";
import Image from "../Common/Image";
import Button from "../Common/Buttons";
import { remove } from "../../slices/productSlice";
import Modal from "../Common/Modal";
import styles from "./styles.module.scss";

const Cart = () => {
  const [show, setShow] = useState({ status: false, id: 0 });
  const [totalToPay, setTotalToPay] = useState(0);
  const { productsInOrder } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  const totalImportToPay = (arr: typeof productsInOrder) => {
    let total = 0;
    arr.forEach(({ pay }) => {
      if (pay) total += pay;
    });

    return total;
  };

  useEffect(() => {
    const toPay = totalImportToPay(productsInOrder);
    setTotalToPay(toPay);
  }, [productsInOrder]);

  const handlePortal = (id: number) => setShow({ status: true, id });

  const handleRemoveProduct = (id: number) => {
    setShow({ status: false, id: 0 });
    dispatch(remove(id));
  };

  return (
    <>
      <div className={styles.car}>
        <div className={styles.car__container}>
          <div className={styles.order}>
            {productsInOrder.map((product, item) => {
              const { id, name, count, pay, image } = product;
              return (
                <div
                  key={item}
                  className={`${styles.order_container} order_${id}`}
                >
                  <Button
                    handleFunction={() => handlePortal(id)}
                    className={styles.order_close}
                  >
                    <img src="/svg/close.svg" alt="/svg/close.svg" />
                  </Button>

                  <div className={styles.order_image}>
                    <span className={styles.order_count}>{count}</span>
                    <Image src={image} alt={name} />
                  </div>
                  <p className={styles.order_to_pay}>${pay}</p>
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

      {show.status &&
        createPortal(
          <Modal
            handleAccept={() => handleRemoveProduct(show.id)}
            handleCancel={() => setShow({ status: false, id: 0 })}
            question="Do you want to add products to the order?"
          />,

          document.body
        )}
    </>
  );
};

export default Cart;
