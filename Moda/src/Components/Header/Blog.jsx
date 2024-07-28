import React from 'react'

function Blog() {
  return (
    <div className='pt-5 w-screen h-[200px]  bg-white/95 flex gap-10 justify-around'>
      <div className=''>
        <div
         style={{backgroundImage:`url(https://img.freepik.com/free-photo/woman-wearing-black-dress-holding-champagne-glass-posing-red_291650-833.jpg?t=st=1722136589~exp=1722140189~hmac=ecb36df3d3d7b5b906210769a42e3dde0bd750634e70ec2f8bffdfb9fca34f1d&w=740)`}}
        className=' h-[159px] w-[238px] bg-contain bg-no-repeat border flex flex-col place-items-center justify-end hover:shadow-xl hover:shadow-[#ed165f]  hover:cursor-pointer duration-75'
        >
          <p className='text-white text-base font-thin'>MODA'S</p>
          <p className='text-white text-xl'>TRENDY EDIT</p>
        </div>
      </div>


      <div>
      <div
         style={{backgroundImage:`url(https://img.freepik.com/free-photo/portrait-young-beautiful-woman_158595-2911.jpg?t=st=1722136420~exp=1722140020~hmac=a74f4ff27f724b8bf7ca6c96be6cb5dc870012d45279c6615e71522116575691&w=740)`}}
        className=' h-[159px] w-[238px] bg-contain bg-no-repeat border flex flex-col place-items-center justify-end hover:shadow-xl hover:shadow-[#ed165f]   hover:cursor-pointer duration-75'
        >
           <p className='text-white text-base font-thin'>DO'S AND DONT'S FOR</p>
           <p className='text-white text-xl'>DIVA DRESSES</p>
        </div>
      </div>


      <div>
      <div
         style={{backgroundImage:`url(https://img.freepik.com/free-photo/close-up-portrait-smiling-blonde-businesswoman-formal-dressed-isolated-dark-textured-background_613910-4617.jpg?uid=R157033171&ga=GA1.1.2102187785.1707188733&semt=ais_user)`}}
        className=' h-[159px] w-[238px] bg-contain bg-no-repeat border flex flex-col place-items-center justify-end hover:shadow-xl hover:shadow-[#ed165f]   hover:cursor-pointer duration-75'
        >
           
           <p className='text-white text-base font-thin'>WARDROBE</p>
           <p className='text-white text-xl'>ESSENTIALS</p>
        </div>
      </div>

      <div>
      <div
         style={{backgroundImage:`url(https://img.freepik.com/free-photo/stylish-blonde-girl-jacket-jeans-against-brick-black-wall-studio_627829-13922.jpg?t=st=1722136205~exp=1722139805~hmac=2eeb69d2a1c4d45d1ae25af392d599153a7cceb61829ad6dbe81b6312a1d7bf7&w=740)`}}
        className=' h-[159px] w-[238px] bg-contain bg-no-repeat border flex flex-col place-items-center justify-end hover:shadow-xl hover:shadow-[#ed165f]  hover:cursor-pointer duration-75'
        >
           <p className='text-white text-base font-thin'>ALL I NEED IS</p>
           <p className='text-white text-xl'>DENIM</p>

        </div>
      </div>


      <div>
      <div
         style={{backgroundImage:`url(https://img.freepik.com/free-photo/young-woman-posing-wiht-checkered-red-black-shirt-using-headphones_140725-13079.jpg?t=st=1722136105~exp=1722139705~hmac=1e5e54830f59eb0222ecfd3831e116c519ca18b7020967fff2b22e5bec18833a&w=740)`}}
        className=' h-[159px] w-[238px] bg-contain bg-no-repeat border flex flex-col place-items-center justify-end hover:shadow-xl hover:shadow-[#ed165f]   hover:cursor-pointer duration-75'
        >
           <p className='text-white text-base font-thin'>EXPLORE</p>
           <p className='text-white text-xl'>MORE BLOGS</p>

        </div>
      </div>


    </div>
  )
}

export default Blog
