import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <header className='md:px-32 px-16 md:py-6 py-4'>
        <nav>
          <Link href={'/'}>
            <h1 className='md:text-2xl text-xl font-semibold  w-fit'>Dphi</h1>
          </Link>
        </nav>
    </header>
  )
}

export default Navbar