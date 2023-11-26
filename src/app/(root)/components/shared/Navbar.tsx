'use client'
import { UserButton } from '@clerk/nextjs'
import React from 'react'
type Props = {}

const Navbar = (props: Props) => {
  
    
  return (
    <nav className='dark:bg-slate-600 '>
      <div className='dark'></div>
    <UserButton/>
    </nav>
  )
}

export default Navbar