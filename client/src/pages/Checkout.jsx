import { useDispatch, useSelector } from "react-redux";
import "../styles/checkout.css";
import { AiFillCheckCircle } from "react-icons/ai";
import { creatorder, getOrders, getallOrders } from "../store/orderSlice";
import { useEffect, useState } from "react";

const Checkout = () => {
  const { OrderData} = useSelector(state=> state.order)

  const user=localStorage.getItem("userdata")
  const user1=JSON.parse(user)
  console.log("user1",user1._id)
  const userData = useSelector((state) => state.user.userData);
  
 
  console.log('user',  user)
  console.log('Orderdata',  OrderData)
  const dispatch=useDispatch()
  const order = Object.entries(OrderData) 
  console.log('Order', typeof order)
 


  

  return (
    <>
      <div className="checkoutMessage">
        <div className="checkoutTitleContainer">
          <AiFillCheckCircle className="checkoutIcon" />
          <h3>Thank you for your order!</h3>
        </div>
        <span>
          Your order is being processed and will be delivered as fast as
          possible.
        </span>
        

        
       
  
      </div>
    </>
  );
};

export default Checkout;
