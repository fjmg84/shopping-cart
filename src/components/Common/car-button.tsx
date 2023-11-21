import useStateCart from "../../hooks/useStateCart";
import { CartOutline } from "./icons";

export default function CarBtn({ onClick }: { onClick: () => void }) {
  const { cart } = useStateCart();

  return (
    <button onClick={onClick} className="relative">
      <span className="absolute flex items-center justify-center bg-red-500 text-white p-3 w-5 h-5 rounded-full -top-3 -right-3">
        {cart.length}
      </span>
      <CartOutline width="2rem" height="2rem" />
    </button>
  );
}
