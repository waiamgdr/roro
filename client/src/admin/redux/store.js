import { configureStore } from "@reduxjs/toolkit";
import product_slice from './slices/sliceaddproduct'
export default configureStore({ reducer:{productadmin:product_slice}})