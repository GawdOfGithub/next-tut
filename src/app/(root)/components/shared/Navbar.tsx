'use client'
import { SignedIn, UserButton } from '@clerk/nextjs'
import React from 'react'
import Theme from './Theme'
import { Button } from '@/components/ui/button'
type Props = {}

const Navbar = (props: Props) => {
  console.log(localStorage.theme);
    
  return (
    <nav className='dark:bg-black bg-gray-200 p-4 flex items-center justify-between min-w-full '>
      
     
    <span className ="font-bold">  OverFlow</span>
    <input
        type="search"
        className=" w-12 px-1 py-2 rounded-md border focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-800"
        placeholder="Search globally"
      />
      <Theme />
   <SignedIn >
    <UserButton afterSignOutUrl='/' />
   </SignedIn>
    
    </nav>
  )
}

export default Navbar