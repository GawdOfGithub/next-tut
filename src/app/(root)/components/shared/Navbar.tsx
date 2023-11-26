'use client'
import { SignedIn, UserButton } from '@clerk/nextjs'
import React from 'react'
import Theme from './Theme'
type Props = {}

const Navbar = (props: Props) => {
  
    
  return (
    <nav className='dark:bg-slate-600 '>
      
     
      
   <SignedIn>
    <UserButton afterSignOutUrl='/'/>
   </SignedIn>
    <Theme/>
    </nav>
  )
}

export default Navbar