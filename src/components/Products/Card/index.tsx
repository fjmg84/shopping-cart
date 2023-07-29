import { ProductCart } from "../../../type/products";
import Counter from "../../Common/Counter";
import Image from "../../Common/Image";
import Text from "../../Common/Text";
import styles from "./styles.module.scss";

type Props = {
  product: ProductCart;
};
function ProductCard({ product }: Props) {
  const { title, price, image, count } = product;

  return (
    <div className={styles.container}>
      <Image className={styles.image} src={image} alt={image} />

      <Text text={title} myClassName={styles.title} />

      <Text text={`$ ${price}`} myClassName={styles.price} />

      <Counter count={count} price={price} />
    </div>
  );
}

export default ProductCard;
