import { useState, useEffect } from "react";
import { useParams } from "react-router";
import catalogue from "../../catalogue.json";
import ItemDetail from "../../components/itemDetail/ItemDetail";

const ItemDetailContainer = () => {
	const [product, setProduct] = useState([]);
	const { itemId } = useParams; 

	const getProduct = (database) =>
		new Promise((resolve, reject) => {
			setTimeout(() => {
				if (database) {
					resolve(database);
				} else {
					reject("No existe el producto seleccionado");
				}
			}, 2000);
		});

	useEffect(() => {
		getProduct(catalogue)
		.then((result) => {setProduct(result.find((producto) => producto.id === itemId));})
		.catch((err) => console.log(err));
	}, [itemId]);

	console.log(product, "este es ItemDetail");

	return(
        <ItemDetail item={product} />
    ) 
};

export default ItemDetailContainer;