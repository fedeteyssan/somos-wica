
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
	
	const [cart, setCart] = useState([]);

    const addItem = (item, unitsAdded) => {
		// Defino un objeto itemToAdd que será el item a agregar, con una nueva propiedad de picked quantity que será la cantidad seleccionada
		const itemToAdd = { ...item, pickedQuantity: unitsAdded, stock:item.stock- unitsAdded };
        // Defino una variable isInCart que devolverá TRUE si en el cart hay un id que coincida con el del item ingresado
		const isInCart = cart.some((product) => product.id === item.id);
        // Si hay stock del item y no está en el cart, entonces que lo agregue
		if (item.stock > 0) {
			if (!isInCart) {
				setCart([...cart, itemToAdd]);  
			} else {
				//Si ya está en el cart, que encuentre cual es el repetido, y que acumule sus cantidades
				const newCart = cart.map((product)=> product.id===item.id
				?{...product, pickedQuantity: product.pickedQuantity+unitsAdded, stock:product.stock-unitsAdded}
				:product);
				setCart(newCart);
				console.log(newCart);
			}
		}
	};

    const removeItem = (id) => {
		// Al filtrar sólo dejo en el nuevo array aquellos items cuyo id sean distintos del ID del item que quiero eliminar
		setCart(cart.filter((item) => item.id !== id));
	};

    const clearCart = () => {
		//Seteo el cart como un array vacío
		setCart([]);
	};

    return (
		//Exporto el CartProvider al App.js, y al estar wrappeando a todos los children, le puedo pasar a cualquiera de los hijos todo lo que figure dentro de la propiedad value
		<CartContext.Provider value={{ addItem, removeItem, clearCart, cart }}>
			{children}
		</CartContext.Provider>
    );
}

export default CartProvider;