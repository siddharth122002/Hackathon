import Image from 'next/image'
import React from 'react'

function Participate() {
  return (
    <div className='bg-white md:px-32 px-8 md:py-16 py-8'>
        <div className='md:text-4xl text-xl font-bold flex justify-center'>
            <h1>Why Participate in <span className='text-[#44924C]'>AI Challenges?</span></h1>
        </div>
        <div className='md:py-16 py-3 flex flex-col md:flex-row md:gap-12 gap-3'>
            <div className='bg-[#F8F9FD] rounded-lg px-4 py-12 flex flex-col gap-3 w-fit'>
                <Image
                    src={'./icons/carbon_notebook-reference.svg'}
                    width={32}
                    height={32}
                    alt='notebook'
                />
                <h1 className='font-bold md:text-xl'>Prove your skills</h1>
                <h1 className='text-[#64607D]'>Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.</h1>
            </div>
            <div className='bg-[#F8F9FD] rounded-lg px-4 py-12 flex flex-col gap-3'>
                <Image
                    src={'./icons/Vector.svg'}
                    width={32}
                    height={32}
                    alt='notebook'
                />
                <h1 className='font-bold md:text-xl'>Learn from community</h1>
                <h1 className='text-[#64607D]'>One can look and analyze the solutions submitted by the ither Data Scientists in the community and learn from them.</h1>
            </div>
        </div>
        <div className='md:py-16 flex flex-col md:flex-row md:gap-12 gap-3'>
            <div className='bg-[#F8F9FD] rounded-lg px-4 py-12 flex flex-col gap-3 w-fit'>
                <Image
                    src={'./icons/Robot.svg'}
                    width={32}
                    height={32}
                    alt='notebook'
                />
                <h1 className='font-bold md:text-xl'>Challenge Yourself</h1>
                <h1 className='text-[#64607D]'>There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.</h1>
            </div>
            <div className='bg-[#F8F9FD] rounded-lg px-4 py-12 flex flex-col gap-3'>
                <Image
                    src={'./icons/IdentificationCard.svg'}
                    width={32}
                    height={32}
                    alt='notebook'
                />
                <h1 className='font-bold md:text-xl'>Earn recognition</h1>
                <h1 className='text-[#64607D]'>You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewardds.</h1>
            </div>
        </div>
    </div>
  )
}

export default Participate