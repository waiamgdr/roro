import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "reactstrap";
import logo from "../../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

import "../../styles/header.css";
import { logout } from "../../store/Userslice";

const nav__links = [
  
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "product",
    path: "/product",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
  
];

const Header = () => {
  const menuRef = useRef();
  const headerRef = useRef();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
const {isAuth}=useSelector(state=>state.user)
const {userData}=useSelector(state=>state.user)
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  let navigate = useNavigate();
 

  const user=localStorage.getItem("userdata")
  const user1=JSON.parse(user)
  console.log("roleheder",user1.role)

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  console.log(menuRef?.current?.classList.value);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (
  //       document.body.scrollTop > 80 ||
  //       document.documentElement.scrollTop > 80
  //     ) {
  //       headerRef.current.classList.add("header__shrink");
  //     } else {
  //       headerRef.current.classList.remove("header__shrink");
  //     }
  //   });

  //   return () => window.removeEventListener("scroll");
  // }, []);


  // useEffect(() => {
  //   if (headerRef.current) {
  //     window.addEventListener("scroll", () => {
  //       if (
  //         document.body.scrollTop > 80 ||
  //         document.documentElement.scrollTop > 80
  //       ) {
  //         headerRef.current.classList.add("header__shrink");
  //       } else {
  //         headerRef.current.classList.remove("header__shrink");
  //       }
  //     });
  //   }

  //   return () => {
  //     window.removeEventListener("scroll");
  //   };
  // }, []);






  return (
    <header className="header" ref={headerRef}>
      <Container>
      
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo" onClick={() => navigate("/home")}>
            <img src={logo} alt="logo" />
            
          </div>
          {/* ======= menu ======= */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div
              className="menu d-flex align-items-center gap-5"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="header__closeButton">
                <span onClick={toggleMenu}>
                  <i className="ri-close-fill"></i>
                </span>
              </div>
            {user1.role==="user" ? <> {nav__links.map((item, index) => (
     
     
     <NavLink
      
      to={item.path}
      key={index}
      className={(navClass) =>
        navClass.isActive ? "active__menu" : ""
      }
      onClick={toggleMenu}
    >
      {item.display}
    </NavLink> 

      
    ))} </> : <> <Link to="/Dashbord" > Dashbord  </Link>
    <Link to="/addproduct" > ADD Product  </Link>
    <Link to="/listproduct" > Products  </Link>
    <Link to="/alluser" > Users</Link>
    <Link to="/orders" > orders</Link> </>   }
              
            </div>
          </div>
          {isAuth ?
            <>
             <Link to='/login'><button  className="logout" onClick={()=>{dispatch(logout())}} >login out  </button> </Link>
            
 {/* ======== nav right icons ========= */}
 {userData.role==="user"?  <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon" onClick={toggleCart}>
              <i className="ri-shopping-basket-line"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>
            
            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div> : null }
 
   </>
  : <>
 <Link to='/login'><button className="login">login </button> </Link>
  </>}
          
        </div>
        
      </Container>
    </header>
  );
};

export default Header;
