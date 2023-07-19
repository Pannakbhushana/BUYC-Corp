import React from 'react'
import { Route,Routes } from "react-router-dom";
import Dealers from '../Pages/Dealers';
import Marketplace from '../Pages/Marketplace';
import Home from '../Pages/Home';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/dealers' element={<Dealers/>} />
        <Route path='/marketplace' element={<Marketplace/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes
