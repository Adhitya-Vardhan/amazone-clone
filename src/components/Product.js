import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product_info">
        <p>The lean startup</p>
        <p className="Product_price">
          <small>Rs</small>
          <strong>250</strong>
        </p>
        <div className="product_rating">
          <p>&#x2B50;</p>
          <p>&#x2B50;</p>
          <p>&#x2B50;</p>
        </div>
        <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" />
      </div>
      <button> Add to basket</button>
    </div>
  );
}

export default Product;
