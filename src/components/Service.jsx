import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

const Service = () => {
    const navigate = useNavigate();
  function handlenavigate(){
   navigate("/Service/Details")
  }

  return (
    <div className="flex items-center justify-center flex-col gap-3">
   <h1 className='text-3xl font-thin text-cyan-700 '>Services</h1>  
   <button className='rounded p-3 mt-3 text-xl bg-red-400 border' onClick={handlenavigate}>More Details </button>
   <hr  className="w-full border-t-2 border-gray-400 my-4" />
   <Outlet/>
   </div>
  )
}

export default Service;