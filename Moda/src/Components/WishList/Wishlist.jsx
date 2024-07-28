import React from 'react'
import AccountDashbord from './AccountDashbord'

function Wishlist() {
  return (
    <div className='flex'>
      <div>
        <AccountDashbord/>
      </div>
     
      <div className='m-5'>
        <div>
          <h1 className='text-left text-xl font-medium'>MY WISHLIST</h1>
        </div>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 max-w-max gap-10 '>
          <div className='flex flex-col shadow-2xl'>
            <div className='w-[450px] flex items-center justify-center'>
              <div className='w-56 p-1 flex items-center justify-center'>
                <img
                  src="https://img.freepik.com/free-photo/trendy-top-design-mockup-presented-wooden-hanger_460848-13971.jpg?t=st=1722167499~exp=1722171099~hmac=b7739c3bb009f5465b4f4f62985dfede1afd322738d0c7598aa3ba95182acc8c&w=740"
                  alt="Slippers" />
              </div>
              <div className=' w-full'>
                <div className='p-2'>
                  <p className='text-2xl font-medium'>SLEEVLESS TOP </p>
                  <p className='mt-2 text-lg text-gray-500 font-medium'>Size-XS</p>
                </div>
                <ul className='p-2 flex'>
                  <li className='text-lg text-[#ed165f] hover:cursor-pointer flex items-center gap-x-1'>
                    <span className='line-through'>N</span> 1,599
                  </li>
                </ul>
              </div>
            </div>
            <div className='p-2  flex justify-around'>
            <button
                className='p-1 px-7 text-xl font-medium text-white border-[#ed165f] bg-[#ed165f] rounded-xl hover:bg-white hover:text-black duration-100'
              >BUY NOW</button>
              <button
                className='p-1 px-7 text-lg  text-[#ed165f] flex items-center justify-center gap-x-2'
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ed165f"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                REMOVE</button>
            </div>
          </div>

          <div className=' flex flex-col justify-between shadow-2xl'>
            <div className='w-[450px] flex items-center justify-center'>
              <div className='w-56 p-1 flex items-center justify-center'>
                <img
                  src="https://img.freepik.com/free-photo/view-flip-flops-with-summer-essentials-sunglasses_23-2149460019.jpg?t=st=1722165216~exp=1722168816~hmac=4c1a93fecd4c6132963c7a5257b69dcd7d9c2329b397c6b1e614529e1b9b2818&w=740"
                  alt="Slippers" />
              </div>
              <div className=' w-full'>
                <div className='p-2'>
                  <p className='text-2xl font-medium'>Casual Flat Lofers </p>
                  <p className='mt-2 text-lg text-gray-500 font-medium'>Size-EU:36 US:5.5</p>
                </div>
                <ul className='p-2 flex'>
                  <li className='text-lg text-[#ed165f] hover:cursor-pointer flex items-center gap-x-1'>
                    <span className='line-through'>N</span> 1,199
                  </li>
                </ul>
              </div>
            </div>
            <div className='p-2 flex justify-around'>
              <button
                className='p-1 px-7 text-xl font-medium border text-white border-[#ed165f] bg-[#ed165f] rounded-xl hover:bg-white hover:text-black duration-100'
              >BUY NOW</button>
              <button
                className='p-1 px-7 text-lg  text-[#ed165f] flex items-center justify-center gap-x-2'
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ed165f"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                REMOVE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wishlist
