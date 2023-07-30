import ListProduct from "../components/Products/List";
import Cart from "../components/Cart";
import { useGetProductsQuery } from "../redux/queries/products";
import Loading from "../components/Common/Loading";
import Error from "../components/Common/Error404";
//import products from "../data/data.json";

const App = () => {
  const { data: products, isLoading, isError, error } = useGetProductsQuery();
  console.log(products, error);
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
        <section>
          <h1>You E-Commerce</h1>
          <p>{products?.length} products in list</p>
        </section>
        <ListProduct products={products} />
      </main>
    </div>
  );
};

export default App;
