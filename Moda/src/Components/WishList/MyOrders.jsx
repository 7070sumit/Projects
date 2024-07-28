import React from 'react'
import AccountDashbord from './AccountDashbord'

function MyOrders() {
  return (
    <div className='flex'>
    <div>
      <AccountDashbord/>
    </div>
    
    <div className='m-5'>
        <div>
          <h1 className='text-left text-xl font-medium'>MY WISHLIST</h1>
        </div>
        <div className='mt-10 grid grid-cols-2 max-w-max gap-x-10 gap-y-10'>
          <div className='flex flex-col border border-black rounded-lg hover:shadow-2xl'>
            <div className='w-[450px] flex items-center justify-center'>
              <div className='w-56 p-1 flex items-center justify-center'>
                <img
                  src="https://img.freepik.com/free-photo/trendy-top-design-mockup-presented-wooden-hanger_460848-13971.jpg?t=st=1722167499~exp=1722171099~hmac=b7739c3bb009f5465b4f4f62985dfede1afd322738d0c7598aa3ba95182acc8c&w=740"
                  alt="Slippers" />
              </div>
              <div className=' w-full'>
                <div className='px-2'>
                  <p className='text-2xl font-medium'>SLEEVLESS TOP </p>
                  <p className='mt-2 text-lg text-gray-500 font-medium'>Size-XS</p>
                </div>
                <ul className='p-2 flex'>
                  <li className=''>
                  <p className='text-lg text-gray-500 font-medium'>Payment: COD</p>
                  <p className='text-lg text-gray-500 '>Delivery Expected by: 10-8-2025</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className='p-2  flex justify-around'>
            <button
                className='p-1 px-7 text-xl font-medium text-white border-orange-500 bg-orange-500 rounded-xl hover:bg-orange-600 duration-100'
              >In Transist</button>
              <button
                className='p-1 px-7 text-lg  text-[#ed165f] flex items-center justify-center gap-x-2'
              >
                Track Now
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ed165f"><path d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z"/></svg>
                </button>
            </div>
          </div>

          <div className='h-0'></div>

          <div className='flex flex-col border border-black rounded-lg hover:shadow-2xl'>
            <div className='w-[450px] flex items-center justify-center'>
              <div className='w-56 p-1 flex items-center justify-center'>
                <img
                  src="https://img.freepik.com/free-photo/view-flip-flops-with-summer-essentials-sunglasses_23-2149460019.jpg?t=st=1722165216~exp=1722168816~hmac=4c1a93fecd4c6132963c7a5257b69dcd7d9c2329b397c6b1e614529e1b9b2818&w=740"
                  alt="Slippers" />
              </div>
              <div className=' w-full'>
                <div className='px-2'>
                  <p className='text-2xl font-medium'>Casual Flat Lofers </p>
                  <p className='mt-2 text-lg text-gray-500 font-medium'>Size-EU:36 US:5.5</p>
                </div>
                <ul className='p-2 flex'>
                  <li className=''>
                  <p className=' text-lg text-gray-500 font-medium'>Payment: UPI <span>(ref:#7845421742)</span></p>
                  <p className='text-lg text-gray-500 '>Delivery on: 10-7-2024</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className='p-2  flex justify-around'>
            <button
                className='p-1 px-7 text-xl font-medium text-white border-green-500 bg-green-500 rounded-xl hover:bg-green-600 duration-100'
              >Delivered</button>
              <button
                className='p-1 px-7 text-lg  text-[#ed165f] flex items-center justify-center gap-x-2'
              >
                Track Now
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ed165f"><path d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z"/></svg>
                </button>
            </div>
          </div>
        </div>
      </div>
    
      
  </div>
  )
}

export default MyOrders
