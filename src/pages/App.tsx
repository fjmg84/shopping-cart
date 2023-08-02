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
  const {
    data: products = [],
    isLoading,
    isError,
    isSuccess,
  } = useGetProductsQuery();
  const [listProducts, setListProducts] = useState<ProductState[]>(products);
  const [stateButton, setStateButton] = useState("fa fa-arrow-right");
  const dispatch = useAppDispatch();
  const {
    categories: { select: filterCategory },
    price: filterPrice,
  } = useAppSelector((state) => state.filters);
  const asideRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isSuccess) setListProducts(products);
  }, [isSuccess]);

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
        <Cart />
      </aside>

      <main>
        <section className="header">
          <h1>You E-Commerce</h1>
          <Filters />
          <p>products in list {listProductFilters.length}</p>
        </section>
        <ListProduct products={listProductFilters} />
      </main>
    </div>
  );
};

export default App;
