import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <div className="w-full items-center justify-center p-6 bg-gray-300 flex gap-10 ">
    <NavLink className={(e)=>{ return e.isActive ? "text-amber-500" : ""}} to={'/'}>Home</NavLink>
    <NavLink className={(e)=>{ return e.isActive ? "text-amber-500" : ""}} to={'/Products'}>Product</NavLink>
    <NavLink className={(e)=>{ return e.isActive ? "text-amber-500" : ""}} to={'/service'}>Service</NavLink>
    <NavLink className={(e)=>{ return e.isActive ? "text-amber-500" : ""}} to={'/about'}>About</NavLink>
    </div>
    </>
  )
}

export default Nav