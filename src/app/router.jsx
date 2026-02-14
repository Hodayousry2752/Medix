import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";

// Pages
// import Home from "../pages/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
