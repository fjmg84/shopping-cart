import ListProduct from "../components/Products/List";
import Cart from "../components/Cart";
import { useGetProductsQuery } from "../redux/queries/products";
import Loading from "../components/Common/Loading";
import Error from "../components/Common/Error404";
//import products from "../data/data.json";
import { useEffect, useRef, useState } from "react";
import { createListCategories, orderArray } from "../services/funtion";
import { useAppDispatch, useAppSelector } from "../redux/stores/hooks";
import { TYPE_CATEGORY, addCategories } from "../redux/slices/filtersSlice";
import Filters from "../components/Filter";
import { ProductState } from "../type/products";
import Button from "../components/Common/Buttons";

const App = () => {
  const { data: products = [], isLoading, isError } = useGetProductsQuery();
  const [listProducts, setListProducts] = useState<ProductState[]>([]);
  const [stateButton, setStateButton] = useState("fa fa-arrow-right");
  const dispatch = useAppDispatch();
  const {
    categories: { select: filterCategory },
    price: filterPrice,
  } = useAppSelector((state) => state.filters);
  const asideRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (products.length > 0) setListProducts(products);
  }, [products]);

  useEffect(() => {
    const listCategories = createListCategories(listProducts);
    if (listCategories)
      dispatch(addCategories([TYPE_CATEGORY, ...listCategories]));
  }, [listProducts]);

  const filterProducts = (products: ProductState[] = []) => {
    let result = products.filter(
      (product) =>
        filterCategory === TYPE_CATEGORY || product?.category === filterCategory
    );

    if (filterPrice)
      result = orderArray({
        arr: result as [],
        field: "price",
        order: filterPrice as string,
      });

    return result;
  };

  const listProductFilters = filterProducts(listProducts);

  const handleToggleCart = () => {
    asideRef?.current?.classList.toggle("visible");

    asideRef?.current?.classList.contains("visible")
      ? setStateButton("fa fa-arrow-left")
      : setStateButton("fa fa-arrow-right");
  };

  if (isLoading) return <Loading />;

  if (isError) {
    return <Error message="Sorry, An error has occurred! :( " />;
  }

  return (
    <div className="container">
      <Button className="menu" handleFunction={handleToggleCart}>
        <i className={stateButton}></i>
      </Button>

      <aside ref={asideRef}>
        <div className="cart">
          <Cart />
        </div>
      </aside>

      <main>
        <section>
          <div className="header">
            <h1>You E-Commerce</h1>
            <Filters />
            <p>products in list {listProductFilters.length}</p>
          </div>
        </section>
        <section>
          <div className="products">
            <ListProduct products={listProductFilters} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
