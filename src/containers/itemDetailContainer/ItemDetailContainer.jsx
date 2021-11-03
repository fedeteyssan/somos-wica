import { useState, useEffect } from "react";
import catalogue from "../../catalogue.json";
import ItemDetail from "../../components/itemDetail/ItemDetail";

const ItemDetailContainer = () => {
	const [product, setProduct] = useState([]);

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
			.then((result) => setProduct(result[0])) // Por ahora elijo el valor 0 del array de objetos (productos)
			.catch((err) => console.log(err));
	}, []);

	return(
        <ItemDetail item={product} />
    ) 
};

export default ItemDetailContainer;