import React, { useState } from "react";
import ItemCount from "../itemCount/ItemCount";
import { Card, Button, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ItemDetail.scss";
import { useCart } from "../../context/CartContext";


const ItemDetail = ({item}) => {

    //Defino una constante show, que cuando sea true monte el ItemCount, y al ser false (haciendo click en Agregar al carrito) que lo desmonte y monte el boton Ver Carrito 
    const [show, setShow] = useState(true); 
    const [quantity, setQuantity] = useState(null);
    const { addItem } = useCart();

    //La función addToCart va a recibir como parámetro el valor del counter del ItemCount (hijo)
    const addToCart = (unitsAdded) => {
        addItem(item, unitsAdded);
        setQuantity(unitsAdded);
        setShow(false);
        item.stock-=unitsAdded; //Al stock le resto las unidades agregadas
    }

    const keepShopping = () => {
        setShow(true);
        
    }

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
                        {show 
                            ? (<ItemCount stock={item.stock} onAdd={addToCart}/>) //Paso la función addToCart como una prop que estará recibiendo el ItemCount en su parámetro onAdd 
                            : ( <div>
                                    <p>Se agregaron {quantity} {item.title}</p>
                                    <div className="card-buttons">
                                        <Link to="/cart"><Button variant="primary">Ver carrito </Button></Link>
                                        <Link to="/"><Button variant="primary" onClick={keepShopping}>Seguir comprando </Button></Link>
                                    </div>
                                    
                                </div>
                            )
                        } 
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
};

export default ItemDetail;
