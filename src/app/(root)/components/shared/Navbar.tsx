'use client'
import { SignedIn, UserButton } from '@clerk/nextjs'
import React from 'react'
import Theme from './Theme'
import { Button } from '@/components/ui/button'
import Hamburger from './Hamburger'
import useWindow from '@/hooks/useWindow'
import Image from 'next/image'

import RightSideBar from './RightSideBar'
type Props = {}

const Navbar = (props: Props) => {
  const {height,width} = useWindow()
  console.log(localStorage.theme);
    
  return (
    <>
     
      <nav className='dark:bg-black dark:text-white bg-gray-200 p-4 flex items-center justify-between font-bold '>
        {width <= 900 && <Hamburger />}
        <span className="font-bold">OverFlow</span>
        <div className='flex  rounded-md border focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-800'>
          <Image
          src="/icons8-search.svg"
          alt ="searchbar image"
          height={10}
          width={10}
          />
        <input
          type="search"
          className=" rounded-md border focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-800 max-sm:hidden"
          placeholder="Search globally"
        />
        </div>
        <Theme />
        <SignedIn>
          <UserButton afterSignOutUrl='/' />
        </SignedIn>
       
        
      </nav>
      
      <div className=''>
   
      
   
      </div>
    </>
  );
}

export default Navbar