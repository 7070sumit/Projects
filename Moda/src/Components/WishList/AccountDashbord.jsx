import React from 'react'
import {NavLink,useLocation} from 'react-router-dom'

function AccountDashbord() {
  const location=useLocation()

  return (
    <div className='m-5 p-5 shadow-2xl hidden md:hidden lg:block'>
      <div>
        <h1 className='text-center text-xl font-medium'>ACCOUNT DASHBOARD</h1>
      </div>
      <div className='mt-7'>
        <ul className=' p-3 bg-white'>
            <NavLink
            to='/accountinfo'
            className={({isActive}) =>
              `${isActive ? " group text-white bg-[#ed165f] " :"hover:text-[#ed165f]"} p-2 flex gap-x-3 group text-lg font-medium rounded-xl ` 
          }
            >
            <svg 
            className={`${location.pathname === '/accountinfo' ? 'fill-white' : 'group-hover:fill-[#ed165f]'} `}
            xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
                Account Information
            </NavLink>
            <NavLink
            to='/addressbook'
            className={({isActive}) =>
              `${isActive ? " group text-white bg-[#ed165f] " :"hover:text-[#ed165f]"} p-2 flex gap-x-3 group text-lg font-medium rounded-xl ` 
          }
            >
            <svg 
              className={`${location.pathname === '/addressbook' ? 'fill-white' : 'group-hover:fill-[#ed165f]'} `} 
            xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M260-320q47 0 91.5 10.5T440-278v-394q-41-24-87-36t-93-12q-36 0-71.5 7T120-692v396q35-12 69.5-18t70.5-6Zm260 42q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q46-24 96-36t102-12q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 102 12t96 36q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59ZM280-494Z"/></svg>
                Address Book
            </NavLink>
            <NavLink
            to='/myorders'
            className={({isActive}) =>
              `${isActive ? " group text-white bg-[#ed165f] " :"hover:text-[#ed165f]"} p-2 flex gap-x-3 group text-lg font-medium rounded-xl ` 
          }
            >
            <svg 
              className={`${location.pathname === '/myorders' ? 'fill-white' : 'group-hover:fill-[#ed165f]'} `} 
            xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M160-80v-440H80v-240h208q-5-9-6.5-19t-1.5-21q0-50 35-85t85-35q23 0 43 8.5t37 23.5q17-16 37-24t43-8q50 0 85 35t35 85q0 11-2 20.5t-6 19.5h208v240h-80v440H160Zm400-760q-17 0-28.5 11.5T520-800q0 17 11.5 28.5T560-760q17 0 28.5-11.5T600-800q0-17-11.5-28.5T560-840Zm-200 40q0 17 11.5 28.5T400-760q17 0 28.5-11.5T440-800q0-17-11.5-28.5T400-840q-17 0-28.5 11.5T360-800ZM160-680v80h280v-80H160Zm280 520v-360H240v360h200Zm80 0h200v-360H520v360Zm280-440v-80H520v80h280Z"/></svg>
                My Orders
            </NavLink>
            <NavLink
            to='/mywishlist'
            className={({isActive}) =>
              `${isActive ? " group text-white bg-[#ed165f] " :"hover:text-[#ed165f]"} p-2 flex gap-x-3 group text-lg font-medium rounded-xl ` 
          }
            >
            <svg 
              className={`${location.pathname === '/mywishlist' ? 'fill-white' : 'group-hover:fill-[#ed165f]'} `}
             xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
                My Favorites
            </NavLink>
        </ul>
        <div 
        className='p-5 flex items-center justify-center group hover:text-[#ed165f]'
        >
            <NavLink 
            className='flex text-lg items-center gap-x-2 text-[#ed165f]'>
            <svg className="group-hover:fill-[#ed165f]" 
            xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ed165f"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>
            SIGN OUT
            </NavLink>
        </div>
      </div>
    </div>
  )
}

export default AccountDashbord
