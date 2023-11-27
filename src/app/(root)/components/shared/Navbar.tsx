'use client'
import { SignedIn, UserButton } from '@clerk/nextjs'
import React from 'react'
import Theme from './Theme'
import { Button } from '@/components/ui/button'
type Props = {}

const Navbar = (props: Props) => {
  console.log(localStorage.theme);
    
  return (
    <nav className='dark:bg-slate-600 flex justify-between '>
      
     
      OverFlow
      <input type='search' className='text-black' placeholder='search globally' />
    
   <SignedIn>
    <UserButton afterSignOutUrl='/'/>
   </SignedIn>
    <Theme />
    </nav>
  )
}

export default Navbar