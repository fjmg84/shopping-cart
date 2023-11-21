import { ProductCart } from "../../../type/products";
import Counter from "../../Common/Counter";
import Image from "../../Common/Image";
import Rate from "../../Common/Rate";
import Text from "../../Common/Text";


type Props = {
  product: ProductCart;
};
function ProductCard({ product }: Props) {
  const { title, price, image, description, category, rating } = product;

  return (
    <div >
      <div >
        <Image src={image} alt={image} />
      </div>

      <div >
        <Text text={title} >
          <p >{`(${category})`}</p>
        </Text>

        <Text text={`$ ${price}`}  />

        <Text text={description} />

        <Rate count={rating.rate} />

        <Text text={`votos ${rating.count}`} />

        <Counter product={product} />
      </div>
    </div>
  );
}

export default ProductCard;
