import ListProduct from "../components/Products/List";
import Cart from "../components/Cart";
import { useGetProductsQuery } from "../redux/queries/products";
import Loading from "../components/Common/Loading";
import Error from "../components/Common/Error404";

const App = () => {
  const { data: listProducts, isLoading, isError } = useGetProductsQuery();

  if (isLoading) return <Loading />;

  if (isError) {
    return <Error message="Sorry, An error has occurred! :( " />;
  }

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
