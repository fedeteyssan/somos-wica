
import React, { useState } from "react";
import ItemCount from "../../components/itemCount/ItemCount";
import "./ItemListContainer.scss";

const ItemListContainer = (props) => {

    const stock=10;
    
    const [counter,setCounter] = useState(1);

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
       <div id="itemListContainer">
           <h1>
               {props.greetings}
           </h1>
           <ItemCount initial={counter} onRemove={onRemove} onAdd={onAdd}/>
        </div>
    )
}
export default ItemListContainer;