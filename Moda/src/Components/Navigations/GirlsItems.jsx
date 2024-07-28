import React from 'react'
import Category from './Category'
import CategoryCard from './CategoryCard.jsx'
import data2 from '../../db/girlProducts.js'

function GirlsItems() {
    return (
        <div className='mt-8 w-full flex'>
          <div className='pl-4 hidden md:hidden lg:block'>
          <Category/>
          </div>
            <div className='pl-[2px] w-screen'>
              <div className='flex items-center justify-end'>
    
                <div className='p-1 bg-white'>
                <label className='text-base'>Sort by:</label>
                <select className='outline-0 h-7 w-48 text-base font-medium option:hover:bg-gray-100' name="Sort By" id="Sort By">
                  <option value="Recomended">Recomended</option>
                  <option value="What's new">What's New</option>
                  <option value="Popularity">Popularity</option>
                  <option value="Better Discount">Better Discount</option>
                  <option value="High to Low">Price: High to Low</option>
                  <option value="Low to High">Price: Low to High</option>
                  <option value="Customer Ratings">Customer Ratings</option>
    
                </select>
                </div>
    
    
              </div>
    
              <div className='grid grids-cols-2 gap-5'>
                <CategoryCard data={data2.products}/>
    
              </div>
            </div>
            
          
        </div>
      )
}

export default GirlsItems
