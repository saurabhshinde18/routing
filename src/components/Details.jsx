import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';
export const Details = () => {
    const navigate = useNavigate();
    const params = useParams();
    console.log(params);
  return (
    <div className="flex items-center justify-center flex-col gap-3">
   <h1 className='text-3xl font-thin text-cyan-700 '>{params.name} </h1>
   <h3 className='text-2xl font-semibold text-red-500'>Product Description</h3>
   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi commodi recusandae illo inventore ut?</p>
   <button className='rounded p-3 mt-3 text-xl bg-red-400 border' onClick={()=>navigate(-1)}>Go Back</button>
    </div>
  )
}
