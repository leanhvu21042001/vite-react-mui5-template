import React from "react";
import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Footer from "./Footer";
import Header from "./Header";

const defaultTheme = createTheme();

const RootLayout = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={defaultTheme}>
        <div id="root-layout">
          <header id="root-layout-header">
            <Header />
          </header>
          <main id="root-layout-main">
            <Outlet />
          </main>
          <footer id="root-layout-footer">
            <Footer />
          </footer>
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default RootLayout;
