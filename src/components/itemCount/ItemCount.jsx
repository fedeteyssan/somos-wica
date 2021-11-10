import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./ItemCount.scss";


const ItemCount = ({stock, onAdd}) => {

    const [counter,setCounter] = useState(1);

    const onDecrease = () =>{
        if(counter>1){
            setCounter(counter-1);
        }else{
            alert("No se puede agregar al carrito menos de 1 unidad");
        };
    };

    const onIncrease = () =>{
        if(counter<stock){
            setCounter(counter+1);
        }else{
            alert("LLegaste al límite de unidades");
        };
    };
    

    return (

        <div>
            <div className="counter">
               <button onClick={onDecrease}>-</button>
               <p>{counter}</p>
               <button onClick={onIncrease}>+</button>
            </div>
            <Button variant="primary" onClick={()=> {onAdd(counter)}}>Añadir al carrito</Button>
        </div>
       
    )
}
export default ItemCount;