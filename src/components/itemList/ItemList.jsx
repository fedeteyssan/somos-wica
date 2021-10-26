import "./ItemList.scss";
import Item from "../item/Item";

/*El componente ItemList recibe como parámetro el array de objetos (items), el cual va a mapear y 
para cada uno de sus productos,
los va a renderizar en el componente Item */

const ItemList = ({items}) =>{
    return(
      <>
        {items.length
          ? items.map((products) => <Item item={products} key={products.id}/>)
          : "Cargando productos..."}
      </>
    );
};

export default ItemList;