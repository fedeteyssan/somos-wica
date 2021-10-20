import React from "react";
import "./ItemListContainer.scss";

const ItemListContainer = (props) => {

    return (
       <div id="itemListContainer">
           <h1>
               {props.greetings}
           </h1>
           {props.children}
        </div>
       
    )
}
export default ItemListContainer;