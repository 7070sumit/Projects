import React from 'react'
import AccountDashbord from './AccountDashbord'

function AddressBook() {
    return (
        <div className='flex'>
            <div>
                <AccountDashbord />
            </div>


            <div>

            <div className='shadow-xl'>
                <div className='mt-10 ml-5'>
                    <h1 className=' text-left text-xl font-medium'>ADDRESS BOOK</h1>
                </div>
                <div className=' w-full'>

                    <div className='mt-10 ml-5 text-lg font-medium'>
                        <h1>Default Shipping Address</h1>
                    </div>

                    <div className='ml-5 py-5 grid grid-cols-2 gap-x-32 gap-y-5'>
                        <div
                            className='flex flex-col gap-y-2'
                        >
                            <div
                                className='w-72 px-5'
                            >
                                <p className='text-base'>John Doe</p>
                                <p className='text-base'>1234 Elm Street, Appartment 56</p>
                                <p className='text-base'>Springfield, IL 62704, USA</p>
                                <p className='text-base'>+1 (217) 555-7890</p>
                                <p className='text-base'>johndoe@example.com</p>
                            </div>
                            <div className='px-5 flex items-center gap-x-10'>
                                <button className='font-medium text-[#ed165f]'>Edit</button>
                                <button className='font-medium text-[#ed165f]'>Delete</button>
                            </div>


                        </div>


                    </div>
                </div>
            </div>




            <div>
            <div className='my-7'>
                <button
                className='p-1 px-7 text-xl font-medium border text-white border-[#ed165f] bg-[#ed165f] rounded-xl hover:bg-white hover:text-black duration-100'
              >ADD NEW ADDRESS</button>
                </div>
            </div>




            </div>
           
        </div>
    )
}

export default AddressBook
