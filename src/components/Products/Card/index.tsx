import { ProductInOrder } from "../../../type/products";
import Counter from "../../Common/Counter";
import Image from "../../Common/Image";
import Text from "../../Common/Text";
import styles from "./styles.module.scss";

function ProductCard(props: ProductInOrder) {
  const { name, count, price, image } = props;

  return (
    <div className={styles.container}>
      <Image className={styles.image} src={image} alt={name} />

      <Text text={name} myClassName={styles.title} />

      <Text text={`$ ${price}`} myClassName={styles.price} />

      <Counter count={count} price={price} />
    </div>
  );
}

export default ProductCard;
