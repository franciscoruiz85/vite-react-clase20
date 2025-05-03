import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Catalog from "./pages/Catalog";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import Advices from "./components/Advices";
import Layout from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: '/', element: <App /> },
      { path: "/about", element: <About /> },
      { path: "/contacto", element: <Contact /> },
      { path: "/catalogo", element: <Catalog /> },
      { path: "/catalogo/:id", element: <ProductDetail /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
