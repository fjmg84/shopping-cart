import useStateCart from "../../hooks/useStateCart";

const Cart = () => {
  const { cart, removeProduct } = useStateCart();

  return (
    <>
      {cart.length > 0 ? (
        <div className=" flex flex-wrap w-full gap-4 justify-center pt-32 pb-40">
          {cart.map((product) => {
            const { id, image, price, count } = product;
            return (
              <article key={id} className="relative bg-violet-200 rounded-md">
                <div
                  key={id}
                  className="bg-white rounded-md flex items-center shadow-lg justify-center flex-col w-36 h-auto m-2"
                >
                  {
                    <button
                      onClick={() => removeProduct(id)}
                      className="w-10 h-10 p-2 absolute -right-2 -top-2 bg-red-500 hover:bg-red-700 hover:rotate-180 transition-all rounded-full"
                    >
                      <img src="/svg/close.svg" alt="/svg/close.svg" />
                    </button>
                  }

                  <strong className="p-2">{count}</strong>
                  <img src={image} alt={image} className="h-20 w-auto" />

                  <p className="p-2">${price * count}</p>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <p className="text-white text-center">
          There are no products in the cart
        </p>
      )}
    </>
  );
};

export default Cart;
