
import React, { useState, useEffect } from "react";
import ItemCount from "../../components/itemCount/ItemCount";
import ItemList from "../../components/itemList/ItemList";
import catalogue from "../../catalogue.json";
import "./ItemListContainer.scss";

const ItemListContainer = (props) => {
    
    const [products, setProducts] = useState([]);

    const getProductos = (dataBase) => 
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (dataBase) {
                    resolve(dataBase);
                } else {
                    reject("No se han encontrado productos");
                };
            }, 2000);
    });

    useEffect(() => {
        getProductos(catalogue)
        .then((result) => setProducts(result))
        .catch((err) => console.log(err));
    }, []);


    const stock=10;
    
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
       <div className="itemListContainer">
           <h1>
               {props.greetings}
           </h1>
           <div className="itemList">
               <ItemList items={products}/>
               <ItemCount initial={counter} onRemove={onRemove} onAdd={onAdd}/>
           </div>
           
        </div>
    );
};

export default ItemListContainer;