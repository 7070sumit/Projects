import React from 'react'
import { NavLink } from 'react-router-dom'

function Girls() {
  return (
    
    <div className='pt-5 w-screen h-[270px] bg-white/95 flex  gap-64'>

      
        <div className='ml-52 flex flex-col'>
          <p className='text-base'>All Girls</p>
          <NavLink className="hover:underline text-sm text-gray-500">Dresses</NavLink>
          <NavLink className="hover:underline text-sm text-gray-500">Co-Ord Sets</NavLink>
          <NavLink className="hover:underline text-sm text-gray-500">Tops</NavLink>
          <NavLink className="hover:underline text-sm text-gray-500">Bottoms</NavLink>
          <NavLink className="hover:underline text-sm text-gray-500">Jumpsuites</NavLink>
          <NavLink className="hover:underline text-sm text-gray-500">All Accesories</NavLink>
        </div>


        <div className='flex flex-col'>
          <p className='text-base'>Collections</p>
          <NavLink className="hover:underline text-sm text-gray-500">Casual Wears</NavLink>
          <NavLink className="hover:underline text-sm text-gray-500">Evening Wears</NavLink>
        </div>


        <div
         style={{backgroundImage:`url(https://img.freepik.com/free-photo/girl-with-happy-expression_23-2147982507.jpg?t=st=1722137508~exp=1722141108~hmac=2a944f41c3c2eb270929bc760c3dfec52db5d45cc3c2f8b634ce18206d6c0564&w=360)`}}
        className=' h-60 w-40 bg-contain bg-no-repeat border flex flex-col place-items-center justify-end hover:shadow-xl hover:shadow-[#ed165f] hover:cursor-pointer duration-75'
        >
          <p className='text-white text-sm font-thin'>Dresses for your</p>
          <p className='text-white text-3xl '>LIL'ONES</p>
          <p className='mt-3 mb-2 underline text-white text-sm font-thin'>SHOP NOW</p>
        </div>

      
    </div>
  )
}

export default Girls
