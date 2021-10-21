import React from "react";
import ItemCount from "../../components/itemCount/ItemCount";
import "./ItemListContainer.scss";

const ItemListContainer = (props) => {

    return (
       <div id="itemListContainer">
           <h1>
               {props.greetings}
           </h1>
           <ItemCount stock={10} initial={1}/>
        </div>
    )
}
export default ItemListContainer;