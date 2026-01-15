import React from 'react'
import {  useNavigate } from 'react-router-dom'
export const Servicedetails = () => {
    const navigate = useNavigate();
  return (
    <div className='flex items-center justify-center flex-col gap-3'>
      <h3 className='text-center text-2xl font-thin mt-5'>Product 2</h3>
      <button className='bg-amber-400 p-2 rounded text-black' onClick={()=>navigate(-1)}>Go Back</button>
    </div>

  )
}
