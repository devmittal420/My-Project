import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bicycle from "./Pages/Homepage/CycleHomepage";
import SearchContext from "./Pages/context/bicycleContext";
import Header from "./components/Headers/header";
import CartContext from "./Pages/context/cartContext";
import CartPage from "./Pages/Homepage/cartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Bicycle />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <SearchContext>
    <CartContext>
      <RouterProvider router={router} />
    </CartContext>
  </SearchContext>
);
