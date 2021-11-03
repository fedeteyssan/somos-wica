
import React, { useState, useEffect } from "react";
import ItemList from "../../components/itemList/ItemList";
import catalogue from "../../catalogue.json";
import "./ItemListContainer.scss";

const ItemListContainer = (props) => {
    
    const [products, setProducts] = useState([]);

    const getProducts = (dataBase) => 
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
        getProducts(catalogue)
        .then((result) => setProducts(result))
        .catch((err) => console.log(err));
    }, []);


    

    return (
       <div className="itemListContainer">
           <h1>
               {props.greetings}
           </h1>
           <div className="itemList">
               <ItemList items={products}/>  
           </div>
        </div>
    );
};

export default ItemListContainer;