import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "../shop/product";
import "./shop.css";
export const Shop = () => {
  return (
    <div className="container">
      <hr />
      <div className="shop">
        <div className="shopTitle">
          <h1>PocketMart</h1>
          <hr />
        </div>
        <div className="products">
          {PRODUCTS.map((product) => (
            <Product data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
