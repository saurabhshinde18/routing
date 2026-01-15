import React from 'react'
import Home from '../components/Home';
import About from '../components/About';
import { Route,Routes } from 'react-router-dom';
import Products from '../components/Products';
import Service from '../components/Service';
import { Details } from '../components/Details';
import { Servicedetails } from '../components/Servicedetails';
const Mainroutes = () => {
  return (
    <div className="w-full h-screen bg-blue-300 p-4">
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/Products" element={<Products/>}></Route>
    <Route path="/Products/Details/:name" element={<Details/>}></Route>
    <Route path="/About" element={<About/>}></Route>
     <Route path="/Service" element={<Service/>}>
       <Route path="/Service/Details" element={<Servicedetails/>}></Route>
     </Route>
    </Routes>
    </div>
  )
}

export default Mainroutes