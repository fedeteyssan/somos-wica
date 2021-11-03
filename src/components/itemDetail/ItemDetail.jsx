import ItemCount from "../itemCount/ItemCount";
import { Card } from "react-bootstrap";
import {Button} from "react-bootstrap";
import "./ItemDetail.scss";


const ItemDetail = ({ item }) => {

    return (
		<Card key={item.id} style={{ width: "18rem", padding:"2rem", border:"solid #ffb11f"}}>
            <Card.Img variant="top" src={item.pictureURL} style={{maxHeight: "200px"}}/>
            <Card.Body style={{height:"15rem", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"space-around"}}>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    {item.description}
                    <br/><br/>
                    $ {item.price}
                </Card.Text>
                <ItemCount stock={item.stock}/>
                <Button variant="primary">Agregar al carrito</Button>
            </Card.Body>
        </Card>
    );
};

export default ItemDetail;
