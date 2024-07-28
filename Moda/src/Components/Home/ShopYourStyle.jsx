import React from 'react'
import Card from './Card';
import Banner from './Banner';

function ShopYourStyle() {

    return (
        <div className='mt-[570px] bg-white'>
            <Banner/>
            <div>
                <section className='p-5 flex flex-col items-center justify-center text-center gap-y-5'>
                    <h1 className='text-4xl font-semibold text-center'>Shop Your Style</h1>
                    <p className='text-lg font-medium'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis iusto quia eum aspernatur expedita sit atque, voluptatum, maxime ipsam enim nulla! Eaque ea itaque perferendis numquam atque, deserunt cum architecto sapiente quis maiores vitae nulla sunt harum consectetur officia aliquid!</p>
                </section>
            </div>
            <div> 
              <Card/>
            </div>
        </div>
    )
}

export default ShopYourStyle
