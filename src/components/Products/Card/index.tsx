import { addToOrder } from "../../../redux/slices/productSlice";
import { useAppDispatch } from "../../../redux/stores/hooks";
import { ProductCart } from "../../../type/products";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../Common/Buttons";
import Counter from "../../Common/Counter";
import Image from "../../Common/Image";
import Rate from "../../Common/Rate";
import Text from "../../Common/Text";
import styles from "./styles.module.scss";

type Props = {
  product: ProductCart;
};
function ProductCard({ product }: Props) {
  const { title, price, image, count, description, category, rating } = product;
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToOrder());
    toast("Action complete success");
  };

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

        <Counter count={count} price={price} />

        <Button className={styles.btn} handleFunction={handleAddToCart}>
          <>
            <span>add / remove to cart</span>
            <ToastContainer theme="dark" />
          </>
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
