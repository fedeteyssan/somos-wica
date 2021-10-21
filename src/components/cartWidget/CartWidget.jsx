import React from "react";
import "./CartWidget.scss";
import cart from "../..//images/cart.png"


const CartWidget = () => {

    return (
       <img src={cart} alt="" className="cart-icon"/>
    )
}
export default CartWidget;