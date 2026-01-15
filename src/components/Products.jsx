import React from 'react'
import { useNavigate } from 'react-router-dom'
const Products = () => {
  const navigate= useNavigate();
  function handlenavigate(name){
    navigate(`/Products/Details/${name}`)
   
  }
  return (
     <div>
      <h1 className='text-3xl text-black-400 font-thin flex justify-center mb-4'>Products</h1>
      <div >
        <div className="flex items-center justify-center flex-col gap-3">
         <h3 className='text-center text-2xl font-thin mt-5'>Product 1</h3>
      <button className='bg-amber-400 p-2 rounded text-black'  onClick={()=>handlenavigate("product 1")}>See Details</button>
  
         <h3 className='text-center text-2xl font-thin mt-5'>Product 2</h3>
      <button className='bg-amber-400 p-2 rounded text-black' onClick={()=>handlenavigate("product 2")}>See Details</button>

         <h3 className='text-center text-2xl font-thin mt-5'>Product 3</h3>
      <button className='bg-amber-400 p-2 rounded text-black' onClick={()=>handlenavigate("product 3")}>See Details</button>
      </div>
        </div>
    </div>
  )
}

export default Products