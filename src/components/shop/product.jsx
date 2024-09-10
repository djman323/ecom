import React, { useContext } from "react";
import { ShopContext } from "../shop/shop-context";
import "./product.css"; // Ensure this path is correct

export const Product = (props) => {
  const { id, productName, Price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  return (
    <div className="container-fluid product">
      <div className="card">
        <div className="card-img-top">
          <img src={productImage} alt={productName} />
        </div>
        <div className="card-body">
          <hr />
          <div className="card-description">
            <h5 className="card-title">{productName}</h5>
            <p className="card-text">${Price}</p>
            <hr />
          </div>
        </div>
      </div>
      <br />
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
      </button>
      <br />
    </div>
  );
};
