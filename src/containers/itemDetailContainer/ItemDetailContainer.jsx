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
			}, 1000);
		});

	useEffect(() => {
		getProduct(catalogue)
		.then((result) => {setProduct(result.find((product) => product.id === itemId));})
		.catch((err) => console.log(err));
	}, [itemId]);


	return(
        <ItemDetail item={product} />
    ) 
};

export default ItemDetailContainer;