import React, { useState,useEffect } from 'react'
import { NavLink,useLocation } from 'react-router-dom'
import Women from './Women'
import Blog from './Blog'
import Girls from './Girls'
import Sale from './Sale'


function Header() {
    const location=useLocation()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [showWomen, setShowWomen] = useState(false)
    const [showGirls, setShowGirls] = useState(false)
    const [showBlog, setShowBlog] = useState(false)
    const [showSale, setShowSale] = useState(false)

    const [locRoute,setLocRoue]=useState(false)

    useEffect(() => {
        if (location.pathname == '/') {
          setLocRoue(true);
        }else if (location.pathname!=='/home'){
            setLocRoue(false)
        }
      }, [location.pathname]);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen)
    }



    return (
        <>
            <div className='flex flex-col'>
                <div className='mb-5 flex items-center justify-between h-16 shadow-md bg-white shadow-xl'>
                    <div className='hidden md:block'>
                        <ul className='ml-5 flex gap-5 text-base font-medium'>
                        <li
                                
                                className='hover:text-[#ed165f] duration-75 py-5'
                            >
                                <NavLink
                                    to='/'
                                    className={({isActive}) =>
                                        `${isActive ? "text-[#ed165f]" :""} mt-5`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li
                                className='hover:text-[#ed165f] duration-75 py-5'
                                onMouseOver={() => setShowWomen(true)}
                                onMouseOut={() => setShowWomen(false)}
                            >
                                <NavLink
                                    to='/women'
                                    className={({isActive}) =>
                                        `${isActive ? "text-[#ed165f]" :""} mt-5`
                                    }
                                >
                                    Women
                                </NavLink>
                                {showWomen && locRoute &&(
                                    <div
                                        onMouseOver={() => setShowWomen(true)}
                                        onMouseOut={() => setShowWomen(false)}
                                        className="absolute top-[64px] left-0 z-10">
                                        <Women />
                                    </div>
                                )}
                            </li>
                            <li
                                className='hover:text-[#ed165f] duration-75 py-5'
                                onMouseOver={() => setShowGirls(true)}
                                onMouseOut={() => setShowGirls(false)}
                            >
                                <NavLink
                                    className={({isActive}) =>
                                        `${isActive ? "text-[#ed165f]" :""} mt-5` 
                                    }
                                    to='/girls'
                                >
                                    Girls
                                </NavLink>
                                {showGirls && locRoute&& (
                                    <div
                                        onMouseOver={() => setShowGirls(true)}
                                        onMouseOut={() => setShowGirls(false)}
                                        className="absolute top-[64px] left-0 z-10">
                                        <Girls />
                                    </div>
                                )}
                            </li>
                            <li
                                className='hover:text-[#ed165f] duration-75  py-5 hover:cursor-pointer'
                                onMouseOver={() => setShowBlog(true)}
                                onMouseOut={() => setShowBlog(false)}
                            >
                                <p
                                     className={({isActive}) =>
                                        `${isActive ? "text-[#ed165f]" :""} mt-5`
                                    }
                                    to=''
                                >
                                    Blog
                                </p>
                                {showBlog && (
                                    <div
                                        onMouseOver={() => setShowBlog(true)}
                                        onMouseOut={() => setShowBlog(false)}
                                        className="absolute top-[64px] left-0 z-10">
                                        <Blog />
                                    </div>
                                )}
                            </li>
                           
                            <li
                                className='hover:text-[#ed165f] duration-75  py-5'
                            >
                                <NavLink
                                     className={({isActive}) =>
                                        `${isActive ? "text-[#ed165f]" :""} mt-5`
                                    }
                                    to='/about'
                                >
                                    About
                                </NavLink>
                            </li>
                            <li
                                className='hover:text-[#ed165f] text-orange-500 duration-75 py-5'
                                onMouseOver={() => setShowSale(true)}
                                onMouseOut={() => setShowSale(false)}
                            >
                                <NavLink
                                     className={({isActive}) =>
                                        `${isActive ? "text-[#ed165f]" :""} mt-5`
                                    }
                                    to='/sale'
                                >
                                    Sale
                                </NavLink>
                                {showSale && locRoute && (
                                    <div
                                        onMouseOver={() => setShowSale(true)}
                                        onMouseOut={() => setShowSale(false)}
                                        className="absolute top-[64px] left-0 z-10">
                                        <Sale />
                                    </div>
                                )}
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='p-1 m-1 font-dancingScript text-4xl'>Moda</h1>
                    </div>
                    <div className='pr-5'>
                        <ul className='mr-5 flex gap-5'>
                            <li className='flex'>
                                <input type="text"
                                    placeholder='Search...'
                                    className='hidden sm:block outline-0 border-b-[1px] border-gray-400 hover:border-[#ed165f] duration-75'
                                />
                                <NavLink
                                    to='#'
                                >
                                    <svg
                                        className='hover:fill-[#ed165f] duration-75'
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="28px"
                                        viewBox="0 -960 960 960"
                                        width="28px"
                                        fill="#000000">
                                        <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
                                </NavLink>

                            </li>
                            <li>
                                <NavLink
                                    to='#'
                                >
                                    <svg
                                        className='hover:fill-[#ed165f] duration-75'
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="28px"
                                        viewBox="0 -960 960 960"
                                        width="28px"
                                        fill="#000000">
                                        <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" /></svg>
                                </NavLink>

                            </li>
                            <li>

                                <NavLink
                                    to='/mywishlist'
                                >
                                    <svg
                                        className='hover:fill-[#ed165f] duration-75'
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="28px"
                                        viewBox="0 -960 960 960"
                                        width="28px"
                                        fill="#000000">
                                        <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" /></svg>
                                </NavLink>

                            </li>
                            <li>
                                <NavLink
                                    to='/mycart'
                                >
                                    <svg
                                        className='hover:fill-[#ed165f] duration75'
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="28px"
                                        viewBox="0 -960 960 960"
                                        width="28px"
                                        fill="#000000">
                                        <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" /></svg>
                                </NavLink>
                            </li>
                            <li className='lg:hidden md:hidden'>
                                <button
                                    className=''
                                    onClick={toggleMenu}
                                >
                                    {isMenuOpen ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="24px"
                                            viewBox="0 -960 960 960"
                                            width="24px"
                                            fill="#000000">
                                            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
                                    )}



                                </button>
                            </li>

                        </ul>
                    </div>
                </div>
                <div>

                </div>


            </div>






            {isMenuOpen ? (
                <ul className={`bg-white pt-4 -mt-5 md:hidden flex flex-col items-center justify-center text-base font-medium gap-2 `}
                >
                    <li
                        className='hover:text-[#ed165f] duration-75'
                    >
                        <NavLink
                            to='/'
                        >
                            Home
                        </NavLink>
                    </li>
                    <li
                        className='hover:text-[#ed165f] duration-75'
                    >
                        <NavLink
                            to='/women'
                        >
                            Women
                        </NavLink>
                    </li>
                    <li
                        className='hover:text-[#ed165f] duration-75'
                    >
                        <NavLink
                            to='/girls'
                        >
                            Girls
                        </NavLink>
                    </li>
                    
                    <li
                        className='hover:text-[#ed165f] duration-75'
                    >
                        <NavLink
                            to='/about'
                        >
                            About
                        </NavLink>
                    </li>
                    <li
                        className='hover:text-[#ed165f] duration-75'
                    >
                        <NavLink
                            to='/sale'
                        >
                            Sale
                        </NavLink>
                    </li>
                </ul>) : null}
        </>

    )
}





export default Header
