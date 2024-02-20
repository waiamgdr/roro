import React, { useState, useEffect } from "react";

// import products from "../assets/fake-data/products";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet.js";
import CommonSection from "../components/UI/common-section/CommonSection.jsx";
import { Container, Row, Col } from "reactstrap";
import ExtraIngredient from '../components/ExtraIngredient/ExtraIngredient.jsx'

import { cartActions } from "../store/shopping-cart/cartSlice.js";


import "../styles/product-details.css";
import "../styles/product-card.css";

import ProductCard from "../components/UI/product-card/ProductCard.jsx";
import { getallproduct } from "../store/Productslice.js";
import { useDispatch, useSelector } from "react-redux";



const ProductDetails = () => {
console.log( cartActions)

useEffect(()=>{
  dispatch(getallproduct())
 
 
},[]) 

  const  {product}=useSelector(state=>state.product)
  console.log("all",product)
const products = Object.entries(product) ;
console.log("ok", products)
const dispatch = useDispatch();
  
  
  
  const {_id} = useParams();
  console.log(_id)
  
  const [isUpdateNotificationDisplayed, setIsUpdateNotificationDisplayed] = useState(false);
 
  const Product =  product.find(el => (el._id ===_id)?   el : null)
  
  console.log("cc", Product)
  const cartProducts = useSelector((state) => state.cart.cartItems);
  // const {name, new_price, category, description, old_price, image} = Product;

   const id=Product._id
   const name=Product.name
   const new_price=Product.new_price
   const category=Product.category
   const description=Product.description
   const image=Product.image
   const [previewImg, setPreviewImg] = useState(image);
  
  const addItem = () => {
    setIsUpdateNotificationDisplayed(true);
      setTimeout(function(){
        setIsUpdateNotificationDisplayed(false);
      },3000)
    
    dispatch(
      cartActions.addItem({
       id,
        name,
        new_price,
        image,
        description,
        category
        
      })
      );

    };
    
   

  return (
    <Helmet title="Product-details">
      {isUpdateNotificationDisplayed && (
        <div className="updateCartNotifiation">
          <span>You successfully updated your cart!</span>
        </div>
      )
      }

      <CommonSection name={Product.name} />

      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">

              <div className="product__images">
                <div
                  className="img__item mb-3"
                  onClick={() => setPreviewImg(Product.image)}
                >
                  <img src={Product.image} alt="" className="w-50" />
                </div>
                <div
                  className="img__item mb-3"
                  onClick={() => setPreviewImg(Product.image)}
                >
                  <img src={Product.image} alt="" className="w-50" />
                </div>

                <div
                  className="img__item"
                  onClick={() => setPreviewImg(Product.image)}
                >
                  <img src={Product.image} alt="" className="w-50" />
                </div>
              </div>
            </Col>

            <Col lg="4" md="4">
              <div className="product__main-img">
                <img src={previewImg} alt="" className="w-100" />
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="single__product-content">
                <h2 className="product__title mb-3">{Product.name}</h2>
                <p className="product__price">
                  {" "}
                  Price: <span>${Product.new_price}</span>
                </p>
                <p className="category mb-5">
                  Category: <span>{Product.category}</span>
                </p>

                <button onClick={addItem} className="addTOCART__btn">
                  {cartProducts.find(item => item._id === _id) ? 'Update Cart' : 'Add to Cart'}
                </button>
              </div>
            </Col>

           

            <Col lg="12">
              <h6 className="description">Description</h6>
              <div className="description__content">
                <p>{Product.description}</p>
              </div>
            </Col>

            <Col lg="12" className="mb-5 mt-4">
              <h2 className="related__Product-title">You might also like</h2>
            </Col>

            {product.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item._id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
