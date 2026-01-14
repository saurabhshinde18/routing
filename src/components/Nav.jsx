import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <div className="w-full items-center justify-center p-6 bg-gray-300 flex gap-10 ">
    <Link to={'/'}>Home</Link>
    <Link to={'/about'}>about</Link>
    <Link to={'/contact'}>contact</Link>
    </div>
    </>
  )
}

export default Nav