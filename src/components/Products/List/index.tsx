import { useNavigate } from "react-router-dom";
import Button from "../../Common/Buttons";
import Image from "../../Common/Image";
import { ProductState } from "../../../type/products";
import Text from "../../Common/Text";
import { useAppDispatch } from "../../../stores/hooks";
import { remove } from "../../../slices/productSlice";
import styles from "./styles.module.scss";

const ListProduct = ({ products }: { products: ProductState[] }) => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleRemoveProductOfOrder = (id: number) => {
    dispatch(remove(id));
  };

  return (
    <div className={styles.container}>
      {products.map((product) => {
        const { id, image, name, price, inOrder } = product;
        return (
          <div key={id} className={styles.product}>
            <div className={styles.image}>
              <div>
                <Image src={image} alt={name} />
              </div>
            </div>
            <Text text={name} myClassName={styles.title} />
            <Text text={`$ ${price}`} myClassName={styles.price} />
            {inOrder ? (
              <div className={styles.btn}>
                <Button
                  className={styles.btn_add}
                  handleFunction={() => navigate(`product/${id}`)}
                >
                  <span>edit</span>
                </Button>

                <Button
                  className={styles.btn_remove}
                  handleFunction={() => handleRemoveProductOfOrder(id)}
                >
                  <span>remove</span>
                </Button>
              </div>
            ) : (
              <div className={styles.btn}>
                <div>
                  <Button
                    className={styles.btn_add}
                    handleFunction={() => navigate(`product/${id}`)}
                  >
                    <span>add</span>
                  </Button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ListProduct;
