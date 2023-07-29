import { useAppDispatch, useAppSelector } from "../../../redux/stores/hooks";
import Button from "../Buttons";
import useCounter from "../../../hooks/useCounter";
import styles from "./styles.module.scss";
import { useEffect } from "react";
import { update } from "../../../redux/slices/productSlice";

const Counter = ({ count = 0, price = 0 }) => {
  const { counter, increment, reset, decrement } = useCounter({ count });
  const { productSelected } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (productSelected)
      dispatch(
        update({
          ...productSelected,
          count: counter,
          pay: counter * price,
        })
      );
  }, [counter]);

  return (
    <div className={styles.container}>
      <div className={styles.count}>
        <span>
          {counter} / {counter * price}
        </span>
      </div>

      <div className={styles.btn__container}>
        <Button className={styles.btn} handleFunction={() => increment(1)}>
          <span>+</span>
        </Button>
        <Button className={styles.btn} handleFunction={reset}>
          <span>reset</span>
        </Button>
        <Button className={styles.btn} handleFunction={() => decrement(1)}>
          <span>-</span>
        </Button>
      </div>
    </div>
  );
};

export default Counter;
