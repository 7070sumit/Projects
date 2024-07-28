import React from 'react'
import AccountDashbord from './AccountDashbord'

function AccountInformation() {
    return (
        <div className='flex'>
            <div>
                <AccountDashbord />
            </div>
            <div>
                <div className='shadow-xl'>
                    <div className='mt-10 ml-5'>
                        <h1 className=' text-left text-xl font-medium'>ACCOUNT INFORMATION</h1>
                    </div>
                    <div className=' w-full px-20 shadow-2xl'>
                        <div className='mt-5 p-10 grid grid-cols-2 gap-x-32 gap-y-5'>
                            <div
                                className='flex flex-col gap-y-2'
                            >
                                <label htmlFor="Name">First Name</label>
                                <input
                                    className='px-5 py-2 outline-0 border border-black focus:border-[#ed165f] rounded-lg w-72'
                                    type="text" />
                            </div>


                            <div
                                className='flex flex-col gap-y-2'
                            >
                                <label htmlFor="Name">Last Name</label>
                                <input
                                    className='px-5 py-2 outline-0 border border-black focus:border-[#ed165f] rounded-lg w-72'
                                    type="text" />
                            </div>


                            <div
                                className='flex flex-col gap-y-2'
                            >
                                <label htmlFor="Name">Password</label>
                                <input
                                    className='px-5 py-2 outline-0 border border-black focus:border-[#ed165f] rounded-lg w-72'
                                    type="text" />
                            </div>


                            <div
                                className='flex flex-col gap-y-2'
                            >
                                <label htmlFor="Name">Confirm Password</label>
                                <input
                                    className='px-5 py-2 outline-0 border border-black focus:border-[#ed165f] rounded-lg w-72'
                                    type="text" />
                            </div>


                            <div
                                className='flex flex-col gap-y-2'
                            >
                                <label htmlFor="Name">Email</label>
                                <input
                                    className='px-5 py-2 outline-0 border border-black focus:border-[#ed165f] rounded-lg w-72'
                                    type="text" />
                            </div>


                            <div
                                className='flex flex-col gap-y-2'
                            >
                                <label htmlFor="Name">Phone</label>
                                <input
                                    className='px-5 py-2 outline-0 border border-black focus:border-[#ed165f] rounded-lg w-72'
                                    type="text" />
                            </div>


                            <div
                                className='flex flex-col gap-y-2'
                            >
                                <label htmlFor="Name">Gender</label>
                                <select
                                    className='px-5 py-2 outline-0 border border-black focus:border-[#ed165f] rounded-lg w-72'
                                    name="Sort By" id="Sort By">
                                    <option value="Recomended">Prefer not to disclose</option>
                                    <option value="What's new">Male</option>
                                    <option value="Popularity">Female</option>
                                    <option value="Better Discount">Others</option>
                                </select>
                            </div>


                            <div className='h-0'></div>


                            <div
                                className='flex flex-col gap-y-2 '
                            >
                                <label htmlFor="Name">Date of Birth</label>
                                <input
                                    className='px-5 py-2 outline-0 border border-black focus:border-[#ed165f] rounded-lg w-72'
                                    type="date" />
                            </div>



                            <div className='h-0'></div>


                            <div className='mt-4 flex gap-x-2 items-center'>
                                <input
                                    className='accent-[#ed165f] h-5 w-5'
                                    type="checkbox" />
                                <label >Newsletter Subscription</label>
                            </div>
                        </div>


                    </div>
                </div>

                <div className='my-7'>
                <button
                className='p-1 px-7 text-xl font-medium border text-white border-[#ed165f] bg-[#ed165f] rounded-xl hover:bg-white hover:text-black duration-100'
              >SAVE CHANGES</button>
                </div>
            </div>


        </div>
    )
}

export default AccountInformation
