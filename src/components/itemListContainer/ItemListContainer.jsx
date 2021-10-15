import React from "react";
import "./ItemListContainer.scss";

const ItemListContainer = (props) => {

    return (
       <h1>
           {props.greetings}
       </h1>
    )
}
export default ItemListContainer;