import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { Home } from "./pages/Home";
import { ProductPage } from "./pages/ProductPage";
import { B2BPage } from "./pages/B2BPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "productos/:slug", Component: ProductPage },
      { path: "colabora", Component: B2BPage },
    ],
  },
]);
