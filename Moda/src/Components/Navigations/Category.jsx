import React from 'react'
import { NavLink } from 'react-router-dom'

function Category() {
    return (
        <div className='w-80'>
            <div>
                <h1 className='text-4xl font-medium'>CLOTHES</h1>
            </div>
            <div>
            <div className='mt-10 flex justify-between'>
                    <p className='ml-3 text-3xl'>Size</p>
                </div>
                <div className='pt-2'>
                    <hr className='bg-gray-400 h-[2px]' />
                </div>
                <div className='mt-5 flex flex-col'>
                <p className='text-xl font-medium'>All</p>
                <NavLink className="text-gray-500 text-lg hover:underline">Dresses</NavLink>
                <NavLink className="text-gray-500 text-lg hover:underline">Denim</NavLink>
                <NavLink className="text-gray-500 text-lg hover:underline">Jeans</NavLink>
                <NavLink className="text-gray-500 text-lg hover:underline">Jumpsuites</NavLink>
                <NavLink className="text-gray-500 text-lg hover:underline">Tops</NavLink>
                <NavLink className="text-gray-500 text-lg hover:underline">Pants</NavLink>
                <NavLink className="text-gray-500 text-lg hover:underline">Skirts</NavLink>
                <NavLink className="text-gray-500 text-lg hover:underline">Leather</NavLink>
                <NavLink className="text-gray-500 text-lg hover:underline">Sweaters & Knits</NavLink>
                <NavLink className="text-gray-500 text-lg hover:underline">Jacket and Coats</NavLink>
                <NavLink className="text-gray-500 text-lg hover:underline">Shorts</NavLink>
            </div>
            </div>
            



            <div>
                <div className='mt-10 flex justify-between'>
                    <p className='ml-3 text-3xl'>Size</p>
                    <button className='mr-3 font-medium text-gray-400 hover:text-[#ed165f]'>Clear</button>
                </div>
                <div className='pt-2'>
                    <hr className='bg-gray-400 h-[2px]' />
                </div>
                <div className='mt-5 grid grid-cols-4 gap-4'>
                    <div className='p-[2px] border border-gray-500 flex justify-center'>
                        <p className='text-xl'>XXS</p>
                    </div>

                    <div className='p-[2px] border border-gray-500 flex justify-center'>
                        <p className='text-xl'>XS</p>
                    </div>

                    <div className='p-[2px] border border-gray-500 flex justify-center'>
                        <p className='text-xl'>S</p>
                    </div>

                    <div className='p-[2px] border border-gray-500 flex justify-center'>
                        <p className='text-xl'>M</p>
                    </div>

                    <div className='p-[2px] border border-gray-500 flex justify-center'>
                        <p className='text-xl'>L</p>
                    </div>

                    <div className='p-[2px] bg-[#ed165f] border border-[#ed165f] text-white flex justify-center'>
                        <p className='text-xl'>XL</p>
                    </div>

                    <div className='p-[2px] border border-gray-500 flex justify-center'>
                        <p className='text-xl'>23</p>
                    </div>

                    <div className='p-[2px] border border-gray-500 flex justify-center'>
                        <p className='text-xl'>24</p>
                    </div>

                    <div className='p-[2px] border border-gray-500 flex justify-center'>
                        <p className='text-xl'>25</p>
                    </div>

                    <div className='p-[2px] border border-gray-500 flex justify-center'>
                        <p className='text-xl'>26</p>
                    </div>

                    <div className='p-[2px] border border-gray-500 flex justify-center'>
                        <p className='text-xl'>27</p>
                    </div>

                    <div className='p-[2px] border border-gray-500 flex justify-center'>
                        <p className='text-xl'>28</p>
                    </div>

                    <div className='p-[2px] border border-gray-500 flex justify-center'>
                        <p className='text-xl'>29</p>
                    </div>

                    <div className='p-[2px] border border-gray-500 flex justify-center'>
                        <p className='text-xl'>30</p>
                    </div>

                    <div className='p-[2px] bg-[#ed165f] border border-[#ed165f] text-white flex justify-center'>
                        <p className='text-xl'>31</p>
                    </div>

                    <div className='p-[2px] border border-gray-500 flex justify-center'>
                        <p className='text-xl'>32</p>
                    </div>











                </div>


            </div>



            <div>
                <div className='mt-10 flex justify-between'>
                    <p className='ml-3 text-3xl'>Colors</p>
                    <button className='mr-3 font-medium text-gray-400 hover:text-[#ed165f]'>Clear</button>
                </div>
                <div className='pt-2'>
                    <hr className='bg-gray-400 h-[2px]' />
                </div>
                <div className='mt-5 grid grid-cols-3 gap-3'>
                    <div className='flex justify-center items-center rounded-lg border border-white hover:border-[#ed165f]'>
                        <div className='w-6 h-6 bg-green-700 rounded-md'></div>
                        <p className='ml-2 text-lg font-normal'>Green</p>
                    </div>

                    <div className='flex justify-center items-center rounded-lg border border-white hover:border-[#ed165f]'>
                        <div className='w-6 h-6 bg-blue-700 rounded-md'></div>
                        <p className='ml-2 text-lg font-normal'>Blue</p>
                    </div>

                    <div className='flex justify-center items-center rounded-lg border border-white hover:border-[#ed165f]'>
                        <div className='w-6 h-6 bg-black rounded-md'></div>
                        <p className='ml-2 text-lg font-normal'>Black</p>
                    </div>

                    <div className='flex justify-center items-center rounded-lg border border-white hover:border-[#ed165f]'>
                        <div className='w-6 h-6 bg-[#808000] rounded-md'></div>
                        <p className='ml-2 text-lg font-normal'>Olive</p>
                    </div>

                    <div className='flex justify-center items-center rounded-lg border border-white hover:border-[#ed165f]'>
                        <div className='w-6 h-6 bg-red-700 rounded-md'></div>
                        <p className='ml-2 text-lg font-normal'>Red</p>
                    </div>



                    <div className='flex justify-center items-center rounded-lg border border-white hover:border-[#ed165f]'>
                        <div className='w-6 h-6 bg-yellow-400 rounded-md'></div>
                        <p className='ml-2 text-lg font-normal'>Yellow</p>
                    </div>


                    <div className='flex justify-center items-center rounded-lg border border-white hover:border-[#ed165f]'>
                        <div className='w-6 h-6 bg-purple-600 rounded-md'></div>
                        <p className='ml-2 text-lg font-normal'>Purple</p>
                    </div>

                    <div className='flex justify-center items-center rounded-lg border border-white hover:border-[#ed165f]'>
                        <div className='w-6 h-6 bg-pink-400 rounded-md'></div>
                        <p className='ml-2 text-lg font-normal'>Pink</p>
                    </div>

                    <div className='flex justify-center items-center rounded-lg border border-white hover:border-[#ed165f]'>
                        <div className='w-6 h-6 bg-white rounded-md border border-black'></div>
                        <p className='ml-2 text-lg font-normal'>White</p>
                    </div>

                    <div className='flex justify-center items-center rounded-lg border border-white hover:border-[#ed165f]'>
                        <div className='w-6 h-6 bg-[#007FFF] rounded-md'></div>
                        <p className='ml-2 text-lg font-normal'>Azure</p>
                    </div>

                    <div className='flex justify-center items-center rounded-lg border border-white hover:border-[#ed165f]'>
                        <div className='w-6 h-6 bg-[#00FFFF] rounded-md'></div>
                        <p className='ml-2 text-lg font-normal'>Cyan</p>
                    </div>

                    <div className='flex justify-center items-center rounded-lg border border-white hover:border-[#ed165f]'>
                        <div className='w-6 h-6 bg-[#F5F5DC] rounded-md'></div>
                        <p className='ml-2 text-lg font-normal'>Biege</p>
                    </div>



                </div>


            </div>



            <div>
                <div className='mt-10 flex justify-between'>
                    <p className='ml-3 text-3xl'>Price</p>
                    <button className='mr-3 font-medium text-gray-400 hover:text-[#ed165f]'>Clear</button>
                </div>
                <div className='pt-2'>
                    <hr className='bg-gray-400 h-[2px]' />
                </div>
                <div className='mt-5 flex flex-col gap-2'>

                    <div className='flex text-xl '>
                        <input
                            className='w-6 h-6 ml-3'
                            type="checkbox" />
                        <p className='ml-3'><span className='line-through'>N</span>500   -   <span className='line-through'>N</span>999</p>
                    </div>


                    <div className='flex text-xl '>
                        <input
                            className='w-6 h-6 ml-3'
                            type="checkbox" />
                        <p className='ml-3'><span className='line-through'>N</span>1,000  -  <span className='line-through'>N</span>4,999</p>
                    </div>



                    <div className='flex text-xl '>
                        <input
                            className='w-6 h-6 ml-3'
                            type="checkbox" />
                        <p className='ml-3'><span className='line-through'>N</span>5000   -   <span className='line-through'>N</span>9,999</p>
                    </div>



                    <div className='flex text-xl '>
                        <input
                            className='w-6 h-6 ml-3'
                            type="checkbox" />
                        <p className='ml-3'><span className='line-through'>N</span>10,000   -   <span className='line-through'>N</span>14,999</p>
                    </div>



                    <div className='flex text-xl '>
                        <input
                            className='w-6 h-6 ml-3'
                            type="checkbox" />
                        <p className='ml-3'><span className='line-through'>N</span>15,000     -     <span className='line-through'>N</span>20,000</p>
                    </div>


                </div>


            </div>





        </div>
    )
}

export default Category
