
import React, { useState } from "react";
import "./ItemCount.scss";


const ItemCount = ({stock, initial}) => {

    const [counter,setCounter] = useState(initial);

    const onRemove = () =>{
        if(counter>1){
            setCounter(counter-1);
        }else{
            alert("No se puede agregar al carrito menos de 1 unidad");
        }
    }

    const onAdd = () =>{
        if(counter<stock){
            setCounter(counter+1);
        }else{
            alert("LLegaste al límite de unidades")
        }
    }

    return (
       <div class="counter">
           <button onClick={onRemove}>-</button>
           <p>{counter}</p>
           <button onClick={onAdd}>+</button>
       </div>
    )
}
export default ItemCount;