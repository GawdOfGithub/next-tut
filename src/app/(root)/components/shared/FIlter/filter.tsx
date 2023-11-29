import React from 'react'
import { FilterData } from '@/constants'
import { Button } from '@/components/ui/button'
type Props = {}

function Filter({}: Props) {
  return (
    <>
    <div className="flex gap-5 mt-12 max-sm:hidden">
   { 
    FilterData.map((item,index)=>
   ( 
    
    <Button key="index" className='px-3 py-3'>
    {item.name}
    </Button> 
   
    ))
   }
    </div>
   </>
  )
}

export default Filter