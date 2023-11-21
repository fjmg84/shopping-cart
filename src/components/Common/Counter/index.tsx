import { useEffect } from "react";
import Button from "../Buttons";
import useCounter from "../../../hooks/useCounter";

import useStateCart from "../../../hooks/useStateCart";
import { ProductCart } from "../../../type/products";

type Props = {
  product: ProductCart;
};

const Counter = ({ product }: Props) => {
  const { count, price, id } = product;
  const { updateProduct, removeProduct } = useStateCart();
  const { counter, increment, reset, decrement } = useCounter({ count });

  useEffect(() => {
    if (counter > 0)
      updateProduct({
        ...product,
        count: counter,
      });
    else removeProduct(id);
  }, [counter]);

  return (
    <div >
      <div >
        <span>
          {counter} / {counter * price}
        </span>
      </div>

      <div >
        <Button handleFunction={() => increment(1)}>
          <span>+</span>
        </Button>
        <Button  handleFunction={reset}>
          <span>reset</span>
        </Button>
        <Button handleFunction={() => decrement(1)}>
          <span>-</span>
        </Button>
      </div>
    </div>
  );
};

export default Counter;
