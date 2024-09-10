import React, { useContext } from "react";
import "./cart.css";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../shop/shop-context";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cartTitle">
        <h1>Cart</h1>
        <hr />
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          // Check if the product is in the cart and has a quantity greater than 0
          if (cartItems[product.id] > 0) {
            return <CartItem key={product.id} data={product} />;
          }
          // Optionally return null for cases where the product is not in the cart
          return null;
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h1 className="emptyCart">Your cart is empty</h1>
      )}
    </div>
  );
};
