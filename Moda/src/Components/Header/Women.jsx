import React from 'react'
import { NavLink } from 'react-router-dom'

function Women() {
  return (
    <div className='pt-5 w-screen h-[270px]  bg-white/95 flex gap-10 justify-around'>
      <div className='flex flex-col gap-5'>
        <div>
          <p className='text-base'>All Women</p>
          <NavLink className="hover:underline text-sm text-gray-500">New Arrival</NavLink>
        </div>
        <div className='flex flex-col gap-1'>
        <p className='text-base'>All Clothing</p>
        <NavLink className="hover:underline text-sm text-gray-500">Dress/Jumpsuites</NavLink>
        <NavLink className="hover:underline text-sm text-gray-500">Top/Shirts</NavLink>
        <NavLink className="hover:underline text-sm text-gray-500">Co-ords Sets</NavLink>
        <NavLink className="hover:underline text-sm text-gray-500">Bottoms</NavLink>
        <NavLink className="hover:underline text-sm text-gray-500">Jacket/Blazers</NavLink>
        <NavLink className="hover:underline text-sm text-gray-500">Sweater/Cardign</NavLink>
        </div>
      </div>


      <div className='flex flex-col gap-1'>
      <p className='text-base'>All Accesories</p>
      <NavLink className="hover:underline text-sm text-gray-500">New Accesories</NavLink>
      <NavLink className="hover:underline text-sm text-gray-500">Jewellery</NavLink>
      <NavLink className="hover:underline text-sm text-gray-500">Bags</NavLink>
      <NavLink className="hover:underline text-sm text-gray-500">Belts</NavLink>
      <NavLink className="hover:underline text-sm text-gray-500">Footware</NavLink>
      <NavLink className="hover:underline text-sm text-gray-500">Scarves & Stoles</NavLink>
      <NavLink className="hover:underline text-sm text-gray-500">Fragrance</NavLink>
      </div>



      <div className='flex flex-col gap-1'>
      <p className='text-base'>Collections</p>
      <NavLink className="hover:underline text-sm text-gray-500">Fall Winter 24</NavLink>
      <NavLink className="hover:underline text-sm text-gray-500">Moda Exclusive</NavLink>
      <NavLink className="hover:underline text-sm text-gray-500">Get #StyledbyModa</NavLink>
      <NavLink className="hover:underline text-sm text-gray-500">Bestsellers</NavLink>
      <NavLink className="hover:underline text-sm text-gray-500">Work Wear</NavLink>
      <NavLink className="hover:underline text-sm text-gray-500">Casual Wear</NavLink>
      <NavLink className="hover:underline text-sm text-gray-500">Evening Wear</NavLink>
      <NavLink className="hover:underline text-sm text-gray-500">Winter Wear</NavLink>
      <NavLink className="hover:underline text-sm text-gray-500">Everyday Wear</NavLink>
      </div>


      


      <div className='flex flex-col gap-1'>
      <p className='text-base'>Shop By Edit</p>
      <NavLink className="hover:underline text-sm text-gray-500">Peppy Classic</NavLink>
      <NavLink className="hover:underline text-sm text-gray-500">Sorbet</NavLink>
      <NavLink className="hover:underline text-sm text-gray-500">Vivid Sunset</NavLink>
      <NavLink className="hover:underline text-sm text-gray-500">Travel and Leisure</NavLink>
      <NavLink className="hover:underline text-sm text-gray-500">Shilver of Whites</NavLink>
      <NavLink className="hover:underline text-sm text-gray-500">Mono Chrome Chic</NavLink>
      <NavLink className="hover:underline text-sm text-gray-500">Carmel Swirls</NavLink>
      </div>


      <div
         style={{backgroundImage:`url(https://img.freepik.com/free-photo/medium-shot-unknown-woman-posing_23-2149417556.jpg?t=st=1722138202~exp=1722141802~hmac=01148dc50dda0b185130b898d97daecdab96785241053ffe895b99ba9aa0e992&w=360)`}}
        className=' h-60 w-40 bg-contain bg-no-repeat border flex flex-col place-items-center justify-end hover:shadow-xl hover:shadow-[#ed165f] hover:cursor-pointer duration-75'
        >
          
          <p className='text-white text-xl '>NEW ARRIVAL</p>
          <p className='mt-3 mb-2 underline text-white text-sm font-thin'>SHOP NOW</p>
        </div>
    </div>
  )
}

export default Women
