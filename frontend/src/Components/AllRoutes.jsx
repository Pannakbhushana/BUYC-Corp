import React from 'react'
import { Route,Routes } from "react-router-dom";
import Dealers from '../Pages/Dealers';
import Marketplace from '../Pages/Marketplace';
import Home from '../Pages/Home';
import SignUp from '../Pages/SignUp';
import Login from '../Pages/Login';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/dealers' element={<Dealers/>} />
        <Route path='/marketplace' element={<Marketplace/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes
