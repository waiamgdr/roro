

import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "reactstrap";

// import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import Helmet from "../components/Helmet/Helmet";
import ReactPaginate from "react-paginate";
import "../styles/pagination.css";
import { useDispatch , useSelector} from 'react-redux'
import { getallproduct } from "../store/Productslice";


const ALLproducts = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const dispatch=useDispatch()
  const  {product}=useSelector(state=>state.product)
 


  const searchedProduct = product  ;

  const productPerPage = 4;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = Array.isArray(searchedProduct) && searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };



  useEffect(()=>{
    dispatch(getallproduct())
   
   
  },[])

  return (
    <Helmet title="product">
      <Container>
        <Row>
          { Array.isArray(displayPage) &&  displayPage.map((item) => (
            <Col
             
              key={item._id}
              className="mb-4 mt-4"
            >
              <ProductCard item={item} />
            </Col>
          ))}
          <div className="d-flex justify-content-center mt-4 mb-4">
            <ReactPaginate
              pageCount={pageCount}
              onPageChange={changePage}
              previousLabel={"Prev"}
              nextLabel={"Next"}
              containerClassName="paginationBttns"
            />
          </div>
        </Row>
      </Container>
    </Helmet>
  );
};

export default ALLproducts;
