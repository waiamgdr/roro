import React from "react";
import "./Footer.css";
import logo_big from "../../assets/logo_big.png";
import instagram_icon from "../../assets/instagram_icon.png";
import pintester_icon from "../../assets/pintester_icon.png";
import whatsapp_icon from "../../assets/whatsapp_icon.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className='footer-logo'>
        <img src={logo_big} alt="" />
        <p>E-commerce</p>
        </div>
        <ul className="footer-links">
          <li><Link to="/">home</Link></li>
          <li><Link to="/product"> Products</Link></li>
          <li> <Link to="/cart">cart </Link></li>
      
          <li><Link to="/contact">Contact </Link></li>
        </ul>
       
        <div  className="footer-social-icon">
            
          <div className="footer-icon-container">
            <img src={instagram_icon} alt="" />
          </div>
          <div className="footer-icon-container">
            <img src={pintester_icon} alt="" />
          </div>
          <div className="footer-icon-container">
            <img src={whatsapp_icon} alt="" />
          </div>
          </div>
          <div className="footer-copyright">
            <hr />
            <p> Copyright @ 2024 all Right Reserved. </p>
          </div>
        
      </div>
    
  );
};

export default Footer;
