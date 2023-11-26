import React from 'react'
import { UserButton } from '@clerk/nextjs'
type Props = {}

const page = (props: Props) => {
  return (
    <div>
     <UserButton afterSignOutUrl='/'/>   
    </div>
  )
}

export default page