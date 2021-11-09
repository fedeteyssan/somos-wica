import React, { useState } from "react";
import ItemCount from "../itemCount/ItemCount";
import { Card, Button, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ItemDetail.scss";


const ItemDetail = ({item}) => {

    const [stock, setStock] = useState(item.stock);
    const [counter,setCounter] = useState(1);
    const [flag, setFlag] = useState(true);

   console.log(stock);
    

    const decreaseUnits = () =>{
        if(counter>1){
            setCounter(counter-1);
            setStock(stock+1);
        }else{
            alert("No se puede agregar al carrito menos de 1 unidad");
        };
    };

    const increaseUnits = () =>{
        if(stock>0){
            setCounter(counter+1);
            setStock(stock-1);
        }else{
            alert("LLegaste al límite de unidades");
        };
    };

    const addToCart = () => {
        setFlag(false);
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
                        {flag 
                        ? (<ItemCount  initial={counter} onIncrease={increaseUnits} onDecrease={decreaseUnits} onAdd={addToCart}/>) 
                        : ( <Link to="/cart"><Button variant="primary">Ver carrito</Button></Link>)} 
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
};

export default ItemDetail;
