import ItemCount from "../itemCount/ItemCount";
import { Card, Button, Row, Col} from "react-bootstrap";
import "./ItemDetail.scss";


const ItemDetail = ({item}) => {

    return (
		<Card key={item.id} style={{ width: "50rem", marginTop:"10rem", padding:"2rem", border:"solid #ffb11f"}}>
            <Row>
                <Col>
                    <Card.Img variant="top" src={item.pictureURL} style={{width: "200px"}}/>
                </Col>
                <Col>
                    <Card.Body style={{height:"30rem", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"space-around"}}>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text style={{textAlign:"center"}}>
                            {item.description}
                            <br/><br/>
                            $ {item.price}
                        </Card.Text>
                        <ItemCount stock={item.stock}/>
                        <Button variant="primary">Agregar al carrito</Button>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
};

export default ItemDetail;
