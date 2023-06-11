import React from 'react';
import { ProductsData } from '../json/InfoProductos';
import ItemListContainer from '../components/ItemListContainer';
import { useParams } from 'react-router-dom';

const Categorias = () => {
    const { IdCategoria } = useParams();
    const filtroCategoria = ProductsData.filter(products => products.categoria === IdCategoria);




    return (

        <div>
            <h1> {IdCategoria} </h1>
            <ItemListContainer productos={filtroCategoria} />
        </div>
    )
}

export default Categorias