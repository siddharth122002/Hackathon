import Image from 'next/image'
import React from 'react'

function HeroBottom() {
  return (
    <div className='bg-[#002A3B] w-full py-16'>
        <div className='container gap-[4vw]  items-center flex justify-center md:flex-row flex-col m-auto'>
            <div className='flex  gap-3 items-center'>
                <Image 
                    src={'./icons/Group 1000002515.svg'}
                    height={50}
                    width={50}
                    alt='ai'
                />
                <div className='text-white'>
                    <p className='md:font-bold md:text-xl'>100k+</p>
                    <p className=' text-xs md:text-sm'>AI model submissions</p>
                </div>
            </div>
            <div className='h-8 bg-white w-[1px] '></div>
            <div className='flex gap-3 items-center'>
                <Image 
                    src={'./icons/Group 1000002516.svg'}
                    height={50}
                    width={50}
                    alt='ai'
                />
                <div className='text-white'>
                    <p className='md:font-bold md:text-xl'>50k+</p>
                    <p className='text-xs md:text-sm'>Data Scientists</p>
                </div>
            </div>
            <div className='h-8 bg-white w-[1px] '></div>
            <div className='flex gap-3 items-center'>
                <Image 
                    src={'./icons/Group 1000002518.svg'}
                    height={50}
                    width={50}
                    alt='ai'
                />
                <div className='text-white'>
                    <p className='md:font-bold md:text-xl'>100k+</p>
                    <p className='text-xs md:text-sm'>AI Challenges hosted</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default HeroBottom