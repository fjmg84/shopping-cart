import { ProductCart, ProductState } from "../../../type/products";
import Counter from "../../Common/Counter";
import Image from "../../Common/Image";
import Rate from "../../Common/Rate";
import Text from "../../Common/Text";

function ProductCard({ product }: { product: ProductCart | ProductState }) {
  const { title, price, image, description, category, rating } = product;

  return (
    <>
      <picture className="bg-white overflow-hidden rounded-md">
        <img src={image} alt={image} className="object-cover h-80 w-auto" />
      </picture>

      <ul className="flex flex-col gap-2">
        <li>
          <p className="flex gap-2">
            {title}
            <span>{`(${category})`}</span>
          </p>
        </li>
        <li>
          <p className="flex gap-2">
            price:
            <span>
              {price.toLocaleString("en", {
                style: "currency",
                currency: "USD",
              })}
            </span>
          </p>
        </li>
        <li>{description}</li>
        <li>
          <Rate count={rating.rate} />
        </li>
        <li>
          <p className="flex gap-2 items-center">
            votos:
            <span className="bg-slate-950 text-white p-3 rounded-full">
              {rating.count}
            </span>
          </p>
        </li>
        <li>
          <Counter product={product} />
        </li>
      </ul>
    </>
  );
}

export default ProductCard;
