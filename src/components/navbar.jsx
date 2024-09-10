import React from "react";
import { ShoppingCart, UserCircle } from "phosphor-react";
import { Link } from "react-router-dom";
import pm from "C:/Users/epand/Documents/GitHub/ecom/src/assets/P.png";
import "./navbar.css";
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navImg">
        <img src={pm} alt="Avatar" className="avatar" />
      </div>
      <div className="links">
        <Link to="/" className="shop">
          Shop
        </Link>
        <Link to="/cart" className="cart">
          <ShoppingCart size={32} />
        </Link>
        <Link to="/login" className="login">
          <UserCircle size={32} />
        </Link>
      </div>
    </div>
  );
};
