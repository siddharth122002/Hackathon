import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className='md:py-32 py-12 pb-24'>
        <div className='flex gap-14 items-center'>
            <div className='bg-[#FFCE5C] md:h-32 h-12 md:w-3 w-1 ml-2 md:ml-0'></div>
            <div className='md:text-5xl text-xl font-semibold text-white '>
                <h1 className='pb-2'>Accelerate Innovation</h1>
                <h1>with Global AI Challenges</h1>
            </div>
        </div>
        <div className='text-white md:px-[72px] px-[30px] md:text-lg pt-6 '>
            <p>AI Challenges at DPhi simulate real-world problems. It is a</p>
            <p>great place to put your AI/Data Science skills to test on</p>
            <p>diverse datasets allowing you to foster learning through</p>
            <p>competitions.</p>
            <Link href={'/create'}>
              <button className='bg-white md:px-4 px-2 rounded-lg md:py-2 py-1 mt-8 text-[#003145] font-semibold md:text-xl'>Create Challenge</button>
            </Link>
        </div>

    </div>
  )
}

export default Hero