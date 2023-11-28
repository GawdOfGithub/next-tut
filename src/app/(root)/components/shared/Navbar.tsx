'use client'
import { SignedIn, UserButton } from '@clerk/nextjs'
import React from 'react'
import Theme from './Theme'
import { Button } from '@/components/ui/button'
import Hamburger from './Hamburger'
import useWindow from '@/hooks/useWindow'
import SidebarForBigDevices from './SidebarForBigDevices'
type Props = {}

const Navbar = (props: Props) => {
  const {height,width} = useWindow()
  console.log(localStorage.theme);
    
  return (
    <>
     
      <nav className='dark:bg-black dark:text-white bg-gray-200 p-4 flex items-center justify-between font-bold '>
        {width <= 900 && <Hamburger />}
        <span className="font-bold">OverFlow</span>
        <input
          type="search"
          className="w-12 px-1 py-2 rounded-md border focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-800"
          placeholder="Search globally"
        />
        <Theme />
        <SignedIn>
          <UserButton afterSignOutUrl='/' />
        </SignedIn>
      </nav>
      <div className=''>
      {width >= 800 && <SidebarForBigDevices />}
      </div>
    </>
  );
}

export default Navbar