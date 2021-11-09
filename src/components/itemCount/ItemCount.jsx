import { Button } from "react-bootstrap";
import "./ItemCount.scss";


const ItemCount = ({initial, onIncrease, onDecrease, onAdd}) => {

    
    

    return (

        <div>
            <div className="counter">
               <button onClick={onDecrease}>-</button>
               <p>{initial}</p>
               <button onClick={onIncrease}>+</button>
            </div>
            <Button variant="primary" onClick={onAdd}>Añadir al carrito</Button>
        </div>
       
    )
}
export default ItemCount;