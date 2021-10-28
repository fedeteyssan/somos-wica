
import React, { useState } from "react";
import "./ItemCount.scss";


const ItemCount = ({stock}) => {

    
    const [counter,setCounter] = useState(1);

    const onRemove = () =>{
        if(counter>1){
            setCounter(counter-1);
        }else{
            alert("No se puede agregar al carrito menos de 1 unidad");
        };
    };

    const onAdd = () =>{
        if(counter<stock){
            setCounter(counter+1);
        }else{
            alert("LLegaste al límite de unidades")
        };
    };

    return (
       <div className="counter">
           <button onClick={onRemove}>-</button>
           <p>{counter}</p>
           <button onClick={onAdd}>+</button>
       </div>
    )
}
export default ItemCount;