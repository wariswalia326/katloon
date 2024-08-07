import React from "react";
import ReactDOM from "react-dom/client";
import Product from "./Components/Product";
import ProductDetails from "./Components/ProductDetails";
import Summary from "./Components/Summary";
import Checkout from "./Components/Checkout";
import CartContext from "./Context/CartContext";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/katloon/products",
    element: <Product />,
  },
  {
    path: "/katloon/product/:productName",
    element: <ProductDetails />,
  },
  {
    path: "/katloon/cart/showSummary",
    element: <Summary />,
  },
  {
    path: "/katloon/checkout",
    element: <Checkout />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartContext>
    <RouterProvider router={router} />
  </CartContext>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
