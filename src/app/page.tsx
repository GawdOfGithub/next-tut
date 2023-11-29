import React from 'react'
import { UserButton } from '@clerk/nextjs'
import LocalSearchBar from './(root)/components/shared/search/LocalSearchBar'
import { Button } from '@/components/ui/button'
import Filter from './(root)/components/shared/FIlter/filter'
import FilterSmallScreen from './(root)/components/shared/FIlter/filterSmallScreen'
type Props = {}

const page = (props: Props) => {
  return (
    <div className='z-50 text-white mt-12 max-w-screen '>
      <div className='flex flex-row justify-between gap-20  max-sm:flex-col max-sm:gap-[3rem]'>
      <Button className='primary gradient bg-yellow-600 dark:text-white  max-sm:w-32 ml-40'>Ask A Question</Button>
     <h1 className='font-extrabold text-4xl text-black dark:text-white mb-5'>All Questions</h1>
     
      </div>
     <LocalSearchBar route ="/"imgSrc="/icons8-search.svg"iconPosition="left" otherClasses='none' placeholder='Search....'/>
       <Filter/>
       <div className='mt-3 w-screen'>
       <FilterSmallScreen/>
       </div>
    </div>
  )
}

export default page