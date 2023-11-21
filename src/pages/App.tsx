import { useEffect, useRef, useState } from "react";
import ListProduct from "../components/Products/List";
import Cart from "../components/Cart";
import { useGetProductsQuery } from "../redux/queries/products";
import Loading from "../components/Common/Loading";
import Error from "../components/Common/Error404";
import { createListCategories, orderArray } from "../services/funtion";
import { TYPE_CATEGORY } from "../redux/slices/filtersSlice";
import { ProductState } from "../type/products";
import useStateFilters from "../hooks/useStateFilters";
import { MdiMenu } from "../components/Common/icons";
import HeaderDetails from "../components/Common/header-filters";
import CarBtn from "../components/Common/car-button";

const App = () => {
  const { data: products = [], isLoading, isError } = useGetProductsQuery();
  const [listProducts, setListProducts] = useState<ProductState[]>(products);

  const menuRef = useRef<HTMLElement>(null);
  const carRef = useRef<HTMLElement>(null);

  const {
    categories: { select: filterCategory },
    price: filterPrice,
    categoriesList,
  } = useStateFilters();

  useEffect(() => {
    if (products.length > 0) {
      setListProducts(products);
      const listCategories = createListCategories(products);
      if (listCategories) categoriesList([TYPE_CATEGORY, ...listCategories]);
    }
  }, [products]);

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

  const toggleMenu = () => {
    menuRef?.current?.classList.toggle("-translate-x-full");
    carRef?.current?.classList.add("translate-x-full");
  };

  const toggleCar = () => {
    carRef?.current?.classList.toggle("translate-x-full");
    carRef?.current?.classList.add("md:right-0");
    menuRef?.current?.classList.add("-translate-x-full");
  };

  if (isLoading) return <Loading />;

  if (isError) {
    return <Error message="Sorry, An error has occurred! :( " />;
  }

  return (
    <div className="min-h-screen">
      <header className="z-40 sticky top-0 h-20 w-full p-5 backdrop-blur-lg ">
        <section className="hidden md:flex flex-wrap justify-between items-center">
          <HeaderDetails listProducts={listProductFilters} />

          <CarBtn onClick={toggleCar} />
        </section>

        <section className="flex justify-between md:hidden">
          <button onClick={toggleMenu}>
            <MdiMenu width="2rem" height="2rem" />
          </button>

          <CarBtn onClick={toggleCar} />
        </section>
      </header>

      <aside>
        <section
          ref={menuRef}
          className="md:hidden z-40 p-10 bg-slate-950 fixed w-full h-full flex flex-col gap-10 justify-center items-center transition-transform -translate-x-full"
        >
          <HeaderDetails listProducts={listProductFilters} />
        </section>

        <section
          ref={carRef}
          className="z-40 p-2 bg-slate-950 h-full fixed w-full lg:w-1/2 flex flex-wrap items-center justify-center transition-transform overflow-auto translate-x-full md:right-0"
        >
          <Cart />
        </section>
      </aside>

      <main className="h-full pb-5 pt-5 md:pb-10 md:pt-10 relative">
        <ListProduct products={listProductFilters} />
      </main>
    </div>
  );
};

export default App;
