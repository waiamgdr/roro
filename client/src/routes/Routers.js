import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Products from "../pages/ALLproducts";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import LoginSingup from "../pages/LoginSingup";
import  Dashbord from "../admin/Dashbord"
import AddProduct from "../admin/Components/AddProduct/AddProduct";
import ListProduct from "../admin/Components/ListProduct/ListProduct";
import Alluser from "../admin/Components/Allusers/Alluser";
import Orders from "../admin/Components/orders/Orders";
const Routers = () => {
  return (
    <Routes>
      <Route  path='/Dashbord' element={<Dashbord/>}/>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/product" element={<Products/>} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/product/:_id" element={<ProductDetails />} />
      <Route path="/login" element={<LoginSingup/>} />
      <Route  path='/addproduct' element={<AddProduct/>}/>
    <Route  path='/listproduct' element={<ListProduct/>}/>
    <Route  path='/alluser' element={<Alluser/>} />
    <Route  path='/orders' element={<Orders/>} />
    </Routes>
  );
};

export default Routers;
