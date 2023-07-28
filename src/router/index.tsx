import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import Product from "../pages/Product";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "product/:productId",
    element: <Product />,
  },
]);
