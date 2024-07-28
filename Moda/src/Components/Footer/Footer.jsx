import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className=' p-5 w-screen flex flex-col items-center justify-center gap-10 font-medium bg-gray-50'>
      <div className=''>
        <h1>Moda</h1>
      </div>

      <div className=' lg:flex-row w-screen flex flex-col items-center justify-around'>



        <div className='p-5'>
          <ul className='flex flex-col items-center justify-center gap-y-2'>
            <li className='hover:text-[#ed165f] duration-100'>
              <NavLink
                to='#'
              >
                About Us
              </NavLink>
            </li>
            <li className='hover:text-[#ed165f] duration-100'>
              <NavLink
                to='#'
              >
                Contact
              </NavLink>
            </li>
            <li className='hover:text-[#ed165f] duration-100'>
              <NavLink
                to='#'
              >
                Terms & Condition
              </NavLink>
            </li>
          </ul>
        </div>




        <div className='p-5'>
          <ul className='flex flex-col items-center justify-center gap-y-3'>
            <li className='flex gap-2 hover:text-[#ed165f] duration-100'>
              <svg width="24px" height="24px" viewBox="-5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ed165f"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>facebook [#ed165f]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-385.000000, -7399.000000)" fill="#ed165f"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z" id="facebook-[#ed165f]"> </path> </g> </g> </g> </g></svg>
              <NavLink
                to='#'
              >
                Facebook
              </NavLink>
            </li>
            <li className='flex gap-2 hover:text-[#ed165f] duration-100'>
              <svg fill="#ed165f" height="24px" width="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-271 296.6 256.4 208.4" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M-14.6,321.2c-9.4,4.2-19.6,7-30.2,8.3c10.9-6.5,19.2-16.8,23.1-29.1c-10.2,6-21.4,10.4-33.4,12.8 c-9.6-10.2-23.3-16.6-38.4-16.6c-29,0-52.6,23.6-52.6,52.6c0,4.1,0.4,8.1,1.4,12c-43.7-2.2-82.5-23.1-108.4-55 c-4.5,7.8-7.1,16.8-7.1,26.5c0,18.2,9.3,34.3,23.4,43.8c-8.6-0.3-16.7-2.7-23.8-6.6v0.6c0,25.5,18.1,46.8,42.2,51.6 c-4.4,1.2-9.1,1.9-13.9,1.9c-3.4,0-6.7-0.3-9.9-0.9c6.7,20.9,26.1,36.1,49.1,36.5c-18,14.1-40.7,22.5-65.3,22.5 c-4.2,0-8.4-0.2-12.6-0.7c23.3,14.9,50.9,23.6,80.6,23.6c96.8,0,149.7-80.2,149.7-149.7c0-2.3,0-4.6-0.1-6.8 C-30.5,341-21.6,331.8-14.6,321.2"></path> </g></svg>
              <NavLink
                to='#'
              >
                Twitter
              </NavLink>
            </li>
            <li className='flex gap-2 hover:text-[#ed165f] duration-100'>
              <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#ed165f"></path> <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#ed165f"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#ed165f"></path> </g></svg>
              <NavLink
                to='#'
              >
                Instagram
              </NavLink>
            </li>
          </ul>
        </div>


      </div>


      <div className='p-5'>
          <div className='flex flex-col items-center justify-center'>
            <h1>Subscribe to our newsletter</h1>
            <section className='mt-2 flex'>
              <input
                className='p-2 h-8 border border-[#ed165f] rounded-l-lg'
                placeholder='Email Address'
                type="text" />
              <button
                className='p-1 px-2 h-8 bg-[#ed165f] text-white rounded-r-lg'
              >OK</button>
            </section>
          </div>
        </div>


      <div className='p-5 flex flex-col items-center justify-center w-screen bg-gray-200'>
        <h1>542 Rose Carpet, CA 95423</h1>
        <h1
          className='hover:text-[#ed165f] duration-100'
        >+44 564 289 356</h1>
        <h1
          className='hover:text-[#ed165f] duration-100'
        >modafashion@mail.com</h1>
        <h1 className='text-cyan-800'>
        © 2024 @Sumit Kumar | All Rights Reserved
        </h1>
      </div>
    </div>
  )
}

export default Footer
