import React from "react";
import "./CartWidget.scss";
import cart from "../..//assets/cart.png"


const CartWidget = () => {

    return (
       <img src={cart} alt="" className="cart-icon"/>
    )
}
export default CartWidget;