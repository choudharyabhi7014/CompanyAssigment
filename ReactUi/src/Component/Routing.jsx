import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import UserLogin from './Userlogin'
import Home from './Home'

function Routing() {
  return (
    <>
     <BrowserRouter>
     <Routes>
        <Route path="/" element={<UserLogin/>} />
        <Route path="/home" element={<Home/>} />
     </Routes>
     </BrowserRouter> 
    </>
  )
}

export default Routing
