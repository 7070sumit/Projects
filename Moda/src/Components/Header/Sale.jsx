import React from 'react'
import { NavLink } from 'react-router-dom'

function Sale() {
  return (
    <div className='pt-5 w-screen h-[270px]  bg-white/95 flex gap-10 justify-around'>

      <div className='flex flex-col'>
        <p className='text-base'>All Sale</p>
        <NavLink className="hover:underline text-sm text-gray-500">End of Season Sale</NavLink>
        <NavLink className="hover:underline text-sm text-gray-500">Last Size Sale</NavLink>
        <NavLink className="hover:underline text-sm text-gray-500">Clerance Sale</NavLink>
      </div>



      <div className='flex flex-col'>
        <p className='text-base'>Women</p>
        <NavLink className="hover:underline text-sm text-gray-500">Dresses</NavLink>
        <NavLink className="hover:underline text-sm text-gray-500">Tops</NavLink>
        <NavLink className="hover:underline text-sm text-gray-500">Co-Ord Sets</NavLink>
        <NavLink className="hover:underline text-sm text-gray-500">Bottoms</NavLink>
        <NavLink className="hover:underline text-sm text-gray-500">Jackets</NavLink>
        <NavLink className="hover:underline text-sm text-gray-500">JumpSuits</NavLink>
      </div>

      <div className='flex flex-col'>
        <p className='text-base'>Girls</p>
        <NavLink className="hover:underline text-sm text-gray-500">Dresses</NavLink>
        <NavLink className="hover:underline text-sm text-gray-500">Co-Ord Sets</NavLink>
        <NavLink className="hover:underline text-sm text-gray-500">Tops</NavLink>
        <NavLink className="hover:underline text-sm text-gray-500">Bottoms</NavLink>
        <NavLink className="hover:underline text-sm text-gray-500">JumpSuits</NavLink>
      </div>


      <div
        style={{ backgroundImage: `url(https://img.freepik.com/free-photo/full-shot-sad-girl-wearing-backpack_23-2149649927.jpg?t=st=1722138368~exp=1722141968~hmac=c253567e813b2a46d305537b820b68580fbcb727bf7ed3fa2596c818b314c7d6&w=360)` }}
        className=' h-60 w-40 bg-contain bg-no-repeat border flex flex-col place-items-center justify-end hover:shadow-xl hover:shadow-[#ed165f] hover:cursor-pointer duration-75'
      >

        <p className='text-white text-sm font-thin'>END OF SEASON</p>
        <p className='text-white text-3xl '>SALE</p>
        <p className='mt-3 mb-2 underline text-white text-sm font-thin'>SHOP NOW</p>
      </div>

    </div>
  )
}

export default Sale
