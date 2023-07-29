import ListProduct from "../components/Products/List";
import Cart from "../components/Cart";
import { useGetProductsQuery } from "../redux/queries/products";

const App = () => {
  const { data: listProducts, isLoading, isError } = useGetProductsQuery();

  if (isLoading) return <label>Loading...</label>;

  if (isError) return <label>Error</label>;

  return (
    <div className="container">
      <aside>
        <Cart />
      </aside>
      <main>
        <ListProduct products={listProducts} />
      </main>
    </div>
  );
};

export default App;
