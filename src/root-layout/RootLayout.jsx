import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";

const RootLayout = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default RootLayout;
