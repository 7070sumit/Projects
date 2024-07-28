import React, { useState,useEffect } from 'react'

function Banner() {

    const slides=[
        {
            url:"https://static.vecteezy.com/system/resources/previews/023/658/113/original/modern-happy-female-lifestyle-fashion-portrait-beautiful-attractive-young-woman-girl-enjoy-stylish-walk-with-shopping-bag-packages-on-the-street-trendy-outfit-on-shopping-mall-browse-product-free-png.png"
        },
        {
            url:"https://i.pinimg.com/originals/4c/1e/67/4c1e679883d1355b9ee0aa0fd832ee4f.png"
        },
        {
            url:"https://styledoor7.com/wp-content/uploads/2022/11/women-fashion-banner-lady-021.webp"
        },
        {
            url:"https://purepng.com/public/uploads/large/purepng.com-women-shoppingwomenpeoplepersonsfemaleshopping-1121525087952fa37o.png"
        },
        {
            url:"https://www.henneybear.in/wp-content/uploads/2024/06/Gray-and-Black-Minimalist-Fashion-Style-Banner.png"
        },
        {
            url:"https://woccy.in/wp-content/uploads/2023/10/happy-young-family-with-one-child-holding-hands-an-2022-12-16-16-04-17-1.webp"
        }
    ]


    const [currentIndex,setCurrentIndex]=useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentIndex==slides.length-1){
                setCurrentIndex(0)
            }else{
                setCurrentIndex(currentIndex+1)
            }
        }, 3000);
        return () => clearInterval(intervalId);
      }, [currentIndex]);


  return (
    <div
      className='fixed top-16 left-0 w-full z-[-1]'
    >
        <div 
        className='w-screen h-[550px] bg-[#ed165f]  group  '
        >
            <div
            style={{backgroundImage:`url(${slides[currentIndex].url})`}}
            className=' w-full h-[400px] bg-top bg-contain bg-no-repeat duration-500  flex justify-center items-center'
            >
                <p className='text-9xl text-white text-shadow-md font-thin'>Moda</p>
            </div> 
            <div
                className='flex top-4 justify-center py-2'
                >
                {slides.map((slides,slideIndex)=>(
                    <div
                    className='pt-5 cursor-pointer'
                    key={slideIndex}
                    >
                        <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z" fill="#FFFFFF"></path> </g></svg>
                    </div>
                ))}
                </div>
                <div className='flex justify-center'>
                    <h1 className='text-2xl text-white'>Explore our Collections</h1>
                </div>
                <div className='pt-2 flex justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="M480-200 240-440l46.67-46.67 193.33 193 193.33-193L720-440 480-200Zm0-248.67-240-240 46.67-46.66 193.33 193 193.33-193L720-688.67l-240 240Z"/></svg>
                </div>
            <div>
            
            </div>
        
        </div>
    </div>
  )
}

export default Banner
