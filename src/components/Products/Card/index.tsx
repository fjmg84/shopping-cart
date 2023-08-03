import { ProductCart } from "../../../type/products";
import Counter from "../../Common/Counter";
import Image from "../../Common/Image";
import Rate from "../../Common/Rate";
import Text from "../../Common/Text";
import styles from "./styles.module.scss";

type Props = {
  product: ProductCart;
};
function ProductCard({ product }: Props) {
  const { title, price, image, description, category, rating } = product;

  return (
    <div className={styles.container}>
      <div className={styles.box__one}>
        <Image src={image} alt={image} />
      </div>

      <div className={styles.box__two}>
        <Text text={title} myClassName={styles.title}>
          <p className={styles.subtitle}>{`(${category})`}</p>
        </Text>

        <Text text={`$ ${price}`} myClassName={styles.price} />

        <Text text={description} myClassName={styles.description} />

        <Rate count={rating.rate} />

        <Text text={`votos ${rating.count}`} />

        <Counter product={product} />
      </div>
    </div>
  );
}

export default ProductCard;
