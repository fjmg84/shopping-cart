import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductCart, ProductState } from "../../../type/products";
import Button from "../../Common/Buttons";
import Image from "../../Common/Image";
import Text from "../../Common/Text";
import { createListOutDuplicate } from "../../../services/funtion";
import Rate from "../../Common/Rate";
import useStateCart from "../../../hooks/useStateCart";
import {
  AddShoppingCart,
  BaselineEye,
  RemoveShoppingCart,
} from "../../Common/icons";
import Price from "../../Common/price";

type Props = {
  products: ProductState[] | undefined;
};
const ListProduct = ({ products }: Props) => {
  const [productsList, setProductList] = useState<ProductCart[]>([]);
  const { cart, removeProduct, updateProduct } = useStateCart();

  useEffect(() => {
    if (products) {
      const list = createListOutDuplicate({
        array1: products,
        array2: cart,
      });
      setProductList(list);
    }
  }, [products, cart]);

  const addCar = (product: ProductCart) => () => {
    const { count } = product;

    const newProduct = {
      ...product,
      count: count + 1,
    };

    updateProduct(newProduct);
  };

  const deleteProduct = (id: number) => () => {
    removeProduct(id);
  };

  return (
    <section className="flex gap-5 w-full flex-wrap flex-row justify-center items-center">
      {productsList.map((product) => {
        const { id, title, price, image, count, rating } = product;

        return (
          <article
            key={id}
            className="relative rounded-md bg-white w-80 h-96 m-4 p-4 flex items-center justify-center flex-col"
          >
            <div className="absolute top-2 right-2 w-20 h-20 bg-red-500 rounded-full p-8 flex items-center justify-center flex-col text-white">
              <Price price={price.toString()} />
            </div>

            <div className="h-full flex items-center justify-center">
              <Image src={image} alt={title} className="flex w-36 h-auto p-2" />
            </div>

            <div className="w-full flex flex-col gap-2 mt-10 bottom-0">
              <Text text={title} myClassName="text-sm" />
              <div className="flex items-center justify-between">
                <Rate count={rating.rate} />
                <div className="flex gap-10">
                  {count === 0 ? (
                    <button onClick={addCar(product)}>
                      <AddShoppingCart width="2em" height="2em" />
                    </button>
                  ) : (
                    <button onClick={deleteProduct(id)}>
                      <RemoveShoppingCart width="2em" height="2em" />
                    </button>
                  )}
                  <Link to={`product/${id}`}>
                    <BaselineEye width={"2em"} height={"2em"} />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default ListProduct;
