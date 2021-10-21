
import React from "react";
import "./ItemCount.scss";


const ItemCount = ({initial, onRemove, onAdd}) => {

    

    return (
       <div className="counter">
           <button onClick={onRemove}>-</button>
           <p>{initial}</p>
           <button onClick={onAdd}>+</button>
       </div>
    )
}
export default ItemCount;