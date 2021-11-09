
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

/*El componente Item recibe como parámetro cada uno de los objetos del array productos (item), 
y va a renderizar cada una de sus propiedades*/

const Item = ({item}) =>{

    return(
        <Card key={item.id} style={{ width: "18rem"}}>
            <Link to={`/item/${item.id}`}>
                <Card.Img variant="top" src={item.pictureURL} style={{maxHeight: "200px"}}/>
            </Link>
            <Card.Body style={{height:"15rem", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"space-around"}}>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>$ {item.price}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Item;