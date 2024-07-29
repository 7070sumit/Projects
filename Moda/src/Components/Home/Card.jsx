import React from 'react';
import data2 from '../../db/producs.js'

const data = data2.products

function Card({ title, description, image, price }) {
  return (
    <div className='py-3 flex flex-col items-center justify-center hover:shadow-lg lg:border-[0.1px] lg:border-[#ed165f] lg:rounded-md'>
      <div className=' border-[0.5px] border-[#ed165f]  lg:bg-[#ed165f] lg:border-none '>
        <div >
          <div class="relative w-48 group">
            <img src={image} alt="Handbag" class="w-full h-full object-cover group-hover:opacity-90" />


            <div class="hidden lg:block lg:flex absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-100 ">
              <button className='bg-white p-1 rounded-md hover:bg-gray-200 duration-75  border-[0.5px] border-[#ed165f]'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ed165f"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" /></svg>
              </button>
              <button className='mt-2 p-1 flex bg-white rounded-md hover:bg-gray-200 duration-75 border-[0.5px] border-[#ed165f]'>
                <h1>Add to cart</h1>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ed165f"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" /></svg>
              </button>
            </div>
          </div>
        </div>

        <div className='my-[2px] flex flex-col items-center justify-center text-lg font-medium bg-white rounded-xl'>
          <h1>{title}</h1>
          <h1><span className='line-through' >N</span>{'  ' + price}</h1>
        </div>
        <div className='lg:hidden mt-2 flex flex-col items-center justify-center'>
          <button className='bg-white p-1 rounded-md hover:bg-gray-200 duration-75  border-[0.5px] border-[#ed165f]'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ed165f"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" /></svg>
          </button>
          <button className='mt-2 p-1 flex bg-white rounded-md hover:bg-gray-200 duration-75  border-[0.5px] border-[#ed165f]'>
            <h1>Add to cart</h1>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ed165f"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function eachCard() {
  return (
    <div className='grid grid-cols-2 md:gap-5 md:grid-cols-3 lg:grid-cols-4'>
      {data.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}

export default eachCard;