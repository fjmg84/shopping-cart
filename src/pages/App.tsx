import { useEffect, useState } from "react";
import { useAppSelector } from "../stores/hooks";
import ListProduct from "../components/Products/List";
import Cart from "../components/Cart";

const App = () => {
  const [products, setProducts] = useState<typeof productList>([]);
  const { productList, productsInOrder } = useAppSelector(
    (state) => state.products
  );

  const createListOutDuplicate = ({
    array1,
    array2,
  }: {
    array1: typeof productList;
    array2: typeof productsInOrder;
  }) => {
    let temp: typeof productsInOrder = [];
    array1.forEach((value1) => {
      let isExist = false;
      array2.forEach((value2) => {
        if (value1.id === value2.id) {
          temp.push(value2);
          isExist = true;
        }
      });
      if (!isExist) temp.push(value1);
    });
    return temp;
  };

  useEffect(() => {
    const newListProduct = createListOutDuplicate({
      array1: productList,
      array2: productsInOrder,
    });
    setProducts(newListProduct);
  }, [productList, productsInOrder]);

  return (
    <div className="container">
      <aside>
        <Cart />
      </aside>
      <main>
        {products.length > 0 ? (
          <ListProduct products={products} />
        ) : (
          <label>Loading...</label>
        )}
      </main>
    </div>
  );
};

export default App;
