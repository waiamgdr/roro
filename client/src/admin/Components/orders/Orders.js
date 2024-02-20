import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getallOrders } from '../../../store/orderSlice';
import "./order.css"
const Orders = () => {
  
  const dispatch=useDispatch();
  const  {OrderData}=useSelector(state=>state.order);
let id;
  useEffect(()=>{
    dispatch(getallOrders())
   
   
  },[])
  return (
   
<div className="List-orders">
      <h1> All Orders List </h1>
      <div className='listorder-format-main'>
        <p>info client  </p>
      
        <p>order</p>
        <p>total</p>
       
        

      </div>


      <div className='listorder-allorder'>



<hr/>



      {OrderData.map((el)=> <> 
      <div className='listorder-format-main' >
      <div  className="box_client" >
        
      <h5> id:{el.owner.id} </h5> 
      <h5>Name: {el.owner.name} </h5> 
      <h5> Email: {el.owner.email} </h5> 
      </div>
     
 <div className="box_order" >
  {  el.cartItems.map((e)=> 
  <>
 
  <div className="order">
   
  <img src={e.image} style={{width: 110}}/>
  <div  className="">
  <h6> name : {e.name}</h6>
  <h6> price: {e.new_price}</h6>
  <h6>quantity:{e.quantity} </h6>
  </div>
  </div>
  <hr></hr>

   </>)}
 
 </div>
 <h5> {el.total}</h5>
 </div>
 
 <hr className='hrr'></hr>
</>)}
      
      </div>
      </div>
  )
}

export default Orders