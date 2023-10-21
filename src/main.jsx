import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "swiper/css";
import 'swiper/css/navigation';

import "@fontsource/lexend/500.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import RootLayout from "./root-layout/RootLayout.jsx";
import ErrorPage from "./error-page.jsx";
import Home from "./pages/Home/Home.jsx";
import RealEstate from "./pages/RealEstate/RealEstate.jsx";

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
        path: "/:slug",
        element: <RealEstate />,
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
