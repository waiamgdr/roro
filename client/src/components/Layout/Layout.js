import React from "react";

import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.js";
import Routes from "../../routes/Routers";
import Carts from "../UI/cart/Carts.jsx";

import { useSelector } from "react-redux";

const Layout = () => {
  const cartIsVisible = useSelector((state) => state.cartUi.cartIsVisible);
console.log(cartIsVisible)
  return (
    <div className="d-flex flex-column vh-100 justify-content-between">
      <Header />
      {cartIsVisible && <Carts />}
      <div>
        <Routes />
      </div>
      <Footer />
      

    </div>
  );
};

export default Layout;
