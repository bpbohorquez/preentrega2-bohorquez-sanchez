import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CartaProducto = ({ datosProducto }) => {
    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={datosProducto.img} />
            <Card.Body>
                <Card.Title>{datosProducto.nombre}</Card.Title>
                <Card.Text>{datosProducto.precio}</Card.Text>
                <Link to={`/item/${datosProducto.id}`}> Detalles </Link>
            </Card.Body>
        </Card>

    )
}

export default CartaProducto