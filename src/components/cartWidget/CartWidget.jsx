import React from "react";
import "./CartWidget.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";


const CartWidget = () => {

    return (
       <FontAwesomeIcon icon={faShoppingBasket} style={{fontSize:"2.5rem", color:"white"}} />
    )
}
export default CartWidget;