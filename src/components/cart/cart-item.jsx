import React, { useContext } from "react";
import { ShopContext } from "../shop/shop-context";

export const CartItem = (props) => {
  const { id, productName, Price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <div className="cart-img">
        <img src={productImage} alt="" height={"50px"} width={"50px"} />
      </div>
      <div className="description">
        <h3>{productName}</h3>
        <p>${Price}</p>
        <p className="total"></p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value, id))}
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};
