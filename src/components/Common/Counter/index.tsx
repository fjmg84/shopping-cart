import useCounter from "../../../hooks/useCounter";
import useStateCart from "../../../hooks/useStateCart";
import { ProductCart } from "../../../type/products";
import { MdiArrowULeftTop, MdiMinus, MdiPlus } from "../icons";

interface Props {
  product: ProductCart;
}

const Counter = ({ product }: Props) => {
  const { count, price } = product;
  const { updateProduct, removeProduct } = useStateCart();
  const { counter, increment, reset, decrement } = useCounter({ count });

  const incrementCar = () => {
    increment(1);
    let count = counter + 1;
    updateProduct({ ...product, count });
  };

  const decrementCar = () => {
    decrement(1);
    let count = counter - 1;
    updateProduct({ ...product, count });
  };

  const resetCar = () => {
    reset();
    removeProduct(product.id);
  };

  return (
    <div className="flex justify-around items-center">
      <div className="w-1/2 text-slate-600">
        {counter} /
        <span className="text-red-400 font-bold">
          {Number(counter * price).toLocaleString("en", {
            style: "currency",
            currency: "USD",
          })}
        </span>
      </div>

      <div className="flex gap-2 w-1/2">
        <button
          onClick={incrementCar}
          className=" bg-slate-950 text-white p-2 w-10 h-10 rounded-full flex items-center justify-center"
        >
          <MdiPlus width="2rem" height="2rem" />
        </button>
        <button
          onClick={resetCar}
          className=" bg-slate-950 text-white p-2 w-10 h-10 rounded-full flex items-center justify-center"
        >
          <MdiArrowULeftTop width="2rem" height="2rem" />
        </button>
        <button
          onClick={decrementCar}
          className=" bg-slate-950 text-white p-2 w-10 h-10 rounded-full flex items-center justify-center"
        >
          <MdiMinus width="2rem" height="2rem" />
        </button>
      </div>
    </div>
  );
};

export default Counter;
