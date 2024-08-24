import React, { useContext } from "react";
import { ShopContext } from "../shop/shop-context";

export const Product = (props) => {
  const { id, productName, Price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  return (
    <div className="container-fluid product">
      <div class="card">
        <div className="card-img-top">
          <img src={productImage} alt="pro" />
        </div>
        <div class="card-body">
          <hr />
          <div className="card-description">
            <h5 class="card-title">{productName}</h5>
            <p class="card-text">${Price}</p>
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
