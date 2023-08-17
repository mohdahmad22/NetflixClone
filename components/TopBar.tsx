import { NavItems } from '@/constants'
import Link from 'next/link'
import React from 'react'

const TopBar = () => {
  return (
    <div className='flex fixed top-0 flex-row bg-black z-10 opacity-90  items-center h-20 w-full'>
      <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" width={100}
        className='mx-4'
      />
      <div className='flex flex-row flex-1 gap-10'>
        {
          NavItems.map((nav) => (
            <nav className='text-white font-bold'>
              <Link href={nav.url}>
                {nav.name}
              </Link>
            </nav>
          ))
        }
      </div>
      <div className='flex flex-row flex-3 gap-5 items-center'>
        <input className='px-4 py-2 ring-1 ring-gray-500 bg-black text-white mx-4 rounded-full outline-none placeholder:text-gray-500 placeholder:font-bold' placeholder='Search' />
      </div>
    </div>
  )
}

export default TopBar