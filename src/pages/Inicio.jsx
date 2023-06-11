import React from 'react';
import ItemListContainer from '../components/ItemListContainer';
import { ProductsData } from '../json/InfoProductos';

const Inicio = () => {
    return (
        <div>
            <h1> Tienda Musical </h1>
            <ItemListContainer productos={ProductsData} />
        </div>
    )
}

export default Inicio

