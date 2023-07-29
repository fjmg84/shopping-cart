import { useAppDispatch, useAppSelector } from "../../../redux/stores/hooks";
import { useEffect } from "react";
import Button from "../Buttons";
import useCounter from "../../../hooks/useCounter";
import { update } from "../../../redux/slices/productSlice";
import styles from "./styles.module.scss";

const Counter = ({ count, price }: { count: number; price: number }) => {
  const { product } = useAppSelector((state) => state.products);
  const { counter, increment, reset, decrement } = useCounter({ count });
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (product)
      dispatch(
        update({
          ...product,
          count: counter,
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
