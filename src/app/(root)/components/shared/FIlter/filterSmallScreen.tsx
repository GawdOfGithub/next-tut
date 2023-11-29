import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import React from 'react'
  import { FilterData } from "@/constants"
  type Props = {}
  const FilterSmallScreen = (props: Props) => {
    return (
        <div className="sm:hidden w-screen">
        <Select>
        <SelectTrigger className="w-screen bg-cyan-200 text-black">
          <SelectValue placeholder="Select a filter" />
        </SelectTrigger>
        <SelectContent>
          {
            FilterData.map((item,index)=>
            (
                <SelectItem key={index} value={item.name}>{item.name}</SelectItem>
            ))
          }
        </SelectContent>
      </Select>
      </div>
    )
  }
 export default FilterSmallScreen