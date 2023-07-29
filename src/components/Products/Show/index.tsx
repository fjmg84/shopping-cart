import { useAppDispatch, useAppSelector } from "../../../redux/stores/hooks";
import { createPortal } from "react-dom";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Common/Buttons";
import Modal from "../../Common/Modal";
import ProductCard from "../Card";
import { addToOrder } from "../../../redux/slices/productSlice";
import styles from "./styles.module.scss";

const ShowProduct = () => {
  const [confirmed, setConfirmed] = useState(false);

  const { productSelected } = useAppSelector((state) => state.products);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleAddToOrder = () => {
    dispatch(addToOrder());
    navigate("/");
  };

  const handleModal = () => setConfirmed(true);

  return (
    <>
      {productSelected ? (
        <div className={styles.container}>
          <div className={styles.product}>
            <ProductCard {...productSelected} />

            <div className={styles.btn__container}>
              <Button
                className={styles.btn}
                handleFunction={() => navigate("/")}
              >
                <img
                  className={styles.btn__return}
                  src="/svg/left.svg"
                  alt="return"
                />
              </Button>

              <Button className={styles.btn} handleFunction={handleModal}>
                <img src="/svg/accept.svg" className={styles.btn__add} />
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <h2>Product not found</h2>
      )}

      {confirmed &&
        createPortal(
          <Modal
            handleAccept={handleAddToOrder}
            handleCancel={() => setConfirmed(false)}
            question="Do you want to add products to the order?"
          />,
          document.body
        )}
    </>
  );
};

export default ShowProduct;
