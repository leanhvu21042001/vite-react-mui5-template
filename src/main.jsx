import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

import "@fontsource/lexend/500.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import RootLayout from "./root-layout/RootLayout.jsx";
import ErrorPage from "./error-page.jsx";
import Home from "./pages/Home/Home.jsx";
import RealEstateForSale from "./pages/RealEstate/Sale/Sale.jsx";
import RealEstateForRent from "./pages/RealEstate/Rent/Rent.jsx";
import RealEstateProjects from "./pages/RealEstateProjects/RealEstateProjects.jsx";
import PostingManagement from "./pages/PostingManagement/PostingManagement.jsx";
import ListPost from "./pages/PostingManagement/ListPost.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        path: "/sale/:slug",
        element: <RealEstateForSale />,
      },
      {
        path: "/rent/:slug",
        element: <RealEstateForRent />,
      },
      {
        path: "/project/:slug",
        element: <RealEstateProjects />,
      },
      {
        path: "/quan-ly-dang-tin",
        element: <PostingManagement />,
      },
      {
        path: "/quan-ly-dang-tin/danh-sach",
        element: <ListPost />,
      },
    ],
  },
]);

const defaultTheme = createTheme();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
