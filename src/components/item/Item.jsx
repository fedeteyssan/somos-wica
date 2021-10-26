import { Card } from "react-bootstrap";
import {Button} from "react-bootstrap";

/*El componente Item recibe como parámetro cada uno de los objetos del array productos (item), 
y va a renderizar cada una de sus propiedades*/

const Item = ({item}) =>{

    return(
        <Card key={item.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.pictureURL} style={{maxHeight: "200px"}}/>
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <p>$ {item.price}</p>

                <Button variant="primary">Agregar al carrito</Button>
            </Card.Body>
        </Card>
    );
};

export default Item;