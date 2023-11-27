import React from 'react'
import { Sidebar} from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
type Props = {}

const SidebarForBigDevices = (props: Props) => {
  const pathname = usePathname()
  return (
    <>
    {
      Sidebar.map((item,index)=>
      (
        <>
        <div key={index} className="min-w-full font-extrabold">
               <Link className={`font-extrabold text-2xl mb-0 dark:hover:text-green-500 hover:text-red-500 ${pathname==="{item.name}" ? "bg-red-300":null}  `}href={item.link}>{item.name}</Link>
               {index < Sidebar.length - 1 && <div className="border-b border-blue-500 mb-5 min-w-full "></div>}
               </div>
      
        </>
      ))
    }
    </>
  )
}