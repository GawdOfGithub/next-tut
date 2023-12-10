import React from 'react'
import FilterSmallScreen from '../components/shared/FIlter/filterSmallScreen'
import { CommunityFilterData } from '@/constants'
import LocalSearchBar from '../components/shared/search/LocalSearchBar'
import UserCard from '../components/shared/USerCard'
type Props = {}

const page = (props: Props) => {
  return (
    <>
    <div className='text-whit font-extrabold text-3xl '>All Users</div>
    <div className='flex flex-col '>
    <LocalSearchBar route="community" iconPosition='left' imgSrc='' placeholder='Search Amazing minds here' otherClasses='mb-3'/>
    <FilterSmallScreen FilterData={CommunityFilterData}/>
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
    
    <UserCard/>
    
    <UserCard/>
    <UserCard/>
    <UserCard/>
    <UserCard/>
    <UserCard/>
    </div>
    </div>
    </>
  )
}

export default page