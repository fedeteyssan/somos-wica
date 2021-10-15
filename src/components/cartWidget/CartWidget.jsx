import React from "react";
import "./CartWidget.scss";
import cart from "/Users/Federico/Desktop/somos-wica/src/images/cart.png"


const CartWidget = () => {

    return (
       <img src={cart} alt="" className="cart-icon"/>
    )
}
export default CartWidget;