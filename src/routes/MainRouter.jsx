import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from '../pages/Inicio';
import NavBar from '../components/NavBar';
import Categorias from '../pages/Categorias';
import Item from '../pages/Item';

const MainRouter = () => {

    return (

        <Router>
            <NavBar />
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/categorias/:IdCategoria' element={<Categorias />} />
                <Route path='/item/:IdItem' element={<Item />} />
            </Routes>
        </Router>
    )
}

export default MainRouter;