import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://m.media-amazon.com/images/G/01/home/awr/2023_Projects/GiftLists/EN-Short_Desktop_Hero_1500x150._CB603578125_.png"
        />

        <div>
          <h2 className="checkout_title">Your shopping Basket</h2>
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
        <h2>the subtotal will go Here</h2>
      </div>
    </div>
  );
}

export default Checkout;
