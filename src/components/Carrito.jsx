import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Carrito = () => {
    return (
        <div> 
            <FontAwesomeIcon icon={faCartShopping} style={{color: "#e6e9ef",}} />
            <span style={{color: "white"}}> 0 </span>
        </div>
    )
}

export default Carrito