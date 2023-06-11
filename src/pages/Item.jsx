import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductsData } from '../json/InfoProductos';
import ItemDetailContainer from '../components/ItemDetailContainer';


const Item = () => {
    const { IdItem } = useParams();
    const filtroItem = ProductsData.filter(products => products.id == IdItem)

    return <ItemDetailContainer productos={filtroItem} />
}

export default Item