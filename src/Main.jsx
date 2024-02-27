import React from 'react'
import LoginPage from './pages/LoginPage'
import LandingPage from './pages/LandinPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import ProtectedRoutes from './utilt/ProtectedRoutes'
import Orders from './pages/Orders'
import Category from './pages/Category'
import Produc from './pages/Produc'

function Main() {
  return (
     <div>
      <BrowserRouter>
       <Routes>
      <Route element={<ProtectedRoutes/>}>
         <Route path="/place/order" element={<Orders/>}></Route>
         <Route path="/category" element={<Category/>}></Route>
         <Route path="/prduct" element={<Produc/>}></Route>
      </Route>
         <Route path="/" element={<LandingPage/>}></Route>
         <Route path="/create/account" element={<RegisterPage/>}></Route>
         <Route path="/login/account" element={<LoginPage/>}></Route>
       </Routes>
      </BrowserRouter>
  </div>
  )
}

export default Main