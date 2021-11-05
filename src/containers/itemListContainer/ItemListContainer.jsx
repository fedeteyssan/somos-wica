
import "./ItemListContainer.scss";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemList from "../../components/itemList/ItemList";
import catalogue from "../../catalogue.json";


const ItemListContainer = (props) => {
    
    const [products, setProducts] = useState([]);
    const{ categoriaId } = useParams;

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
        .then((result) => {
            categoriaId
            ? setProducts(result.filter((product) => product.category === categoriaId))
            : setProducts(catalogue);
        })
        .catch((err) => console.log(err));
    }, [categoriaId]);


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