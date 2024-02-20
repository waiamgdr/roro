import { configureStore  } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice";
import cartUiSlice from "./shopping-cart/cartUiSlice";
import Userslice from "./Userslice";
import product_slice from "./Productslice";
import orderSlice from "./orderSlice";
import product_slice_admin from "../admin/redux/slices/sliceaddproduct"


const store = configureStore({
  reducer: {
    cart: cartSlice,
    cartUi: cartUiSlice,
    user:Userslice, 
    product:product_slice,
    order:orderSlice,
    productadmin:product_slice_admin
  },
});

export default store;
