import React from "react";
import "./Product.css";

function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="Product_price">
          <small>Rs</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#x2B50;</p>
            ))}
        </div>
      </div>
      <img src={image} />

      <button> Add to basket</button>
    </div>
  );
}

export default Product;
