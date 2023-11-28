import React from 'react'
import { UserButton } from '@clerk/nextjs'
import LocalSearchBar from './(root)/components/shared/search/LocalSearchBar'
import { Button } from '@/components/ui/button'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='z-50 text-white mt-12'>
      <div className='flex flex-row justify-center items-center gap-10'>
     <h1 className='font-extrabold text-4xl text-black dark:text-white'>All Questions</h1>
     <Button className='primary gradient bg-yellow-600 dark:text-white'>Ask A Question</Button>
      </div>
     <LocalSearchBar/>
        This is the homepage
    </div>
  )
}

export default page