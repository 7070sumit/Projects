import React from 'react'

function Cart() {
    return (
        <div className='py-10 flex flex-col'>
            <div className='ml-2'>
                <h1 className='text-3xl font-medium'>Shopping Cart (2 items)</h1>
            </div>






            <div className='mt-10'>
                <div className='flex items-center justify-around'>
                    <div className='w-[450px]'>
                        <h1 className='text-lg text-gray-500'>ITEM DESCRIPTION</h1>
                    </div>
                    <div className='hidden md:hidden lg:block'>
                        <h1 className='text-lg text-gray-500'>QUANTITY</h1>
                    </div>
                    <div className='hidden md:hidden lg:block'>
                        <h1 className='text-lg text-gray-500'>UNIT PRICE</h1>
                    </div>
                    <div className='hidden md:hidden lg:block'> 
                        <h1 className='text-lg text-gray-500'>SUB TOTAL</h1>
                    </div>
                </div>



                <div className='p-5 flex border items-center justify-around'>
                    <div className='w-[450px] flex'>
                        <div className='w-56 p-1 flex items-center justify-center'>
                            <img 
                            src="https://img.freepik.com/free-photo/view-flip-flops-with-summer-essentials-sunglasses_23-2149460019.jpg?t=st=1722165216~exp=1722168816~hmac=4c1a93fecd4c6132963c7a5257b69dcd7d9c2329b397c6b1e614529e1b9b2818&w=740" 
                            alt="Slippers" />
                        </div>
                        <div className=' w-full'>
                            <div className='p-2'>
                                <p className='text-2xl font-medium'>Casual flat Lofers</p>
                                <p className='mt-2 text-lg text-gray-500 font-medium'>Size-EU:36 US:5.5</p>
                            </div>
                            <ul className='mt-3 flex justify-around'>
                                <li className='text-lg text-[#ed165f] hover:cursor-pointer flex items-center gap-x-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#ed165f"><path d="m480-144-50-45q-100-89-165-152.5t-102.5-113Q125-504 110.5-545T96-629q0-89 61-150t150-61q49 0 95 21t78 59q32-38 78-59t95-21q89 0 150 61t61 150q0 43-14 83t-51.5 89q-37.5 49-103 113.5T528-187l-48 43Zm0-97q93-83 153-141.5t95.5-102Q764-528 778-562t14-67q0-59-40-99t-99-40q-35 0-65.5 14.5T535-713l-35 41h-40l-35-41q-22-26-53.5-40.5T307-768q-59 0-99 40t-40 99q0 33 13 65.5t47.5 75.5q34.5 43 95 102T480-241Zm0-264Z"/></svg>
                                    Move to Favorite
                                </li>
                                <li className='text-lg text-[#ed165f] hover:cursor-pointer flex items-center gap-x-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#ed165f"><path d="m339-288 141-141 141 141 51-51-141-141 141-141-51-51-141 141-141-141-51 51 141 141-141 141 51 51ZM480-96q-79 0-149-30t-122.5-82.5Q156-261 126-331T96-480q0-80 30-149.5t82.5-122Q261-804 331-834t149-30q80 0 149.5 30t122 82.5Q804-699 834-629.5T864-480q0 79-30 149t-82.5 122.5Q699-156 629.5-126T480-96Zm0-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z"/></svg>
                                    Remove
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-3 hidden md:hidden lg:block'>
                            <div>
                            <button 
                                className='text-5xl'
                                >-</button>
                            </div>
                            <div className='w-9 h-9 border border-black flex items-center justify-center'>
                                <h1 className='text-2xl'>1</h1>
                            </div>
                            <div>
                            <button 
                                className='text-5xl'
                                >+</button>
                            </div>
                    </div>
                    <div className='flex items-center justify-center text-2xl hidden md:hidden lg:block'>
                       <h1><span className='line-through'>N</span> 1,199</h1>
                    </div>
                    <div className='flex items-center justify-center text-2xl hidden md:hidden lg:block'>
                       <h1><span className='line-through'>N</span> 1,199</h1>
                    </div>
                </div>


                <div className='p-5 flex border-y-2 items-center justify-around'>
                    <div className='w-[450px] flex'>
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
                            <ul className='mt-3 flex justify-around'>
                                <li className='text-lg text-[#ed165f] hover:cursor-pointer flex items-center gap-x-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#ed165f"><path d="m480-144-50-45q-100-89-165-152.5t-102.5-113Q125-504 110.5-545T96-629q0-89 61-150t150-61q49 0 95 21t78 59q32-38 78-59t95-21q89 0 150 61t61 150q0 43-14 83t-51.5 89q-37.5 49-103 113.5T528-187l-48 43Zm0-97q93-83 153-141.5t95.5-102Q764-528 778-562t14-67q0-59-40-99t-99-40q-35 0-65.5 14.5T535-713l-35 41h-40l-35-41q-22-26-53.5-40.5T307-768q-59 0-99 40t-40 99q0 33 13 65.5t47.5 75.5q34.5 43 95 102T480-241Zm0-264Z"/></svg>
                                    Move to Favorite
                                </li>
                                <li className='text-lg text-[#ed165f] hover:cursor-pointer flex items-center gap-x-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#ed165f"><path d="m339-288 141-141 141 141 51-51-141-141 141-141-51-51-141 141-141-141-51 51 141 141-141 141 51 51ZM480-96q-79 0-149-30t-122.5-82.5Q156-261 126-331T96-480q0-80 30-149.5t82.5-122Q261-804 331-834t149-30q80 0 149.5 30t122 82.5Q804-699 834-629.5T864-480q0 79-30 149t-82.5 122.5Q699-156 629.5-126T480-96Zm0-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z"/></svg>
                                    Remove
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-3 hidden md:hidden lg:block'>
                            <div>
                            <button 
                                className='text-5xl'
                                >-</button>
                            </div>
                            <div className='w-9 h-9 border border-black flex items-center justify-center'>
                                <h1 className='text-2xl'>1</h1>
                            </div>
                            <div>
                            <button 
                                className='text-5xl'
                                >+</button>
                            </div>
                    </div>
                    <div className='flex items-center justify-center text-2xl hidden md:hidden lg:block'>
                       <h1><span className='line-through'>N</span> 1,599</h1>
                    </div>
                    <div className='flex items-center justify-center text-2xl hidden md:hidden lg:block'>
                       <h1><span className='line-through'>N</span> 1,599</h1>
                    </div>
                </div>
            </div>








            <div className=' mt-5 mr-5 flex flex-col items-end justify-end'>
                <div>
                <h1 className='text-2xl'>TOTAL:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='line-through'>N</span> 2,789</h1>
                    <p className='text-base text-gray-500'>Delivery fee not included yet</p>
                </div>
                <div className='mt-16 mr-10 flex gap-x-14'>
                    <button
                    className='p-1 px-7 text-xl font-medium border border-[#ed165f] rounded-xl hover:bg-[#ed165f] hover:text-white duration-100'
                    >CONTINUE SHOPPING</button>
                   <button
                    className='p-1 px-7 text-xl font-medium border border-[#ed165f] rounded-xl  bg-[#ed165f] text-white hover:bg-[#cb2f63] duration-100'
                    >PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
