
import "./ItemListContainer.scss";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Container } from "react-bootstrap";
import ItemList from "../../components/itemList/ItemList";
import catalogue from "../../catalogue.json";



const ItemListContainer = (props) => {
    
    const [products, setProducts] = useState([]);
    const{ categoryID } = useParams;

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
            categoryID
            ? setProducts(result.filter((product) => product.category === categoryID))
            : setProducts(catalogue);
        })
        .catch((err) => console.log(err));
    }, [categoryID]);


    return (
       <Container fluid className="itemListContainer">
           <h1>
               {props.greetings}
           </h1>
           <div className="itemList">
               <ItemList items={products}/>  
           </div>
        </Container>
    );
};

export default ItemListContainer;