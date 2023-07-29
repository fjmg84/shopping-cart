import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/stores/hooks";
import { useNavigate } from "react-router-dom";
import Button from "../../Common/Buttons";
import ProductCard from "../Card";
import { addToOrder } from "../../../redux/slices/productSlice";
import { ProductCart } from "../../../type/products";
import styles from "./styles.module.scss";

type Props = {
  product: ProductCart | undefined;
};
const ShowProduct = ({ product }: Props) => {
  const [newProduct, setNewProduct] = useState<ProductCart>();
  const { cart } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const productFind = cart.find(({ id }) => id === product?.id);
    if (productFind) return setNewProduct(productFind);

    setNewProduct(product);
  }, [product]);

  const handleAddToOrder = () => {
    dispatch(addToOrder());
  };

  return (
    <>
      {newProduct && (
        <>
          <div className={styles.container}>
            <div className={styles.product}>
              <ProductCard product={newProduct} />

              <div className={styles.btn__container}>
                <Button
                  className={styles.btn}
                  handleFunction={() => navigate("/")}
                >
                  <img
                    className={styles.btn__return}
                    src="/svg/left.svg"
                    alt="return"
                  />
                </Button>

                <Button
                  className={styles.btn}
                  handleFunction={handleAddToOrder}
                >
                  <img src="/svg/accept.svg" className={styles.btn__add} />
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ShowProduct;
