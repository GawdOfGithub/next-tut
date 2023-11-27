import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import React from 'react'
  import Link from "next/link"
  import { Sidebar } from "@/constants"
  import { usePathname } from "next/navigation"
  type Props = {}
  
  const Hamburger = (props: Props) => {
    const pathname = usePathname()
    console.log(pathname);
    return (
        <Sheet>
        <SheetTrigger>☰</SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>Overflow</SheetTitle>
            
          </SheetHeader>
           {
            Sidebar.map((item,index)=>
            (
              <>
              <div key={index} className="min-w-full font-extrabold">
               <Link className={`font-extrabold text-2xl mb-0 dark:hover:text-green-500 hover:text-red-500 ${pathname==="{item.name}" ? "bg-red-300":null}  `}href={item.link}>{item.name}</Link>
               {index < Sidebar.length - 1 && <div className="border-b border-blue-500 mb-5 min-w-full "></div>}
              {}
              </div>
              </>
            ))
           }
        </SheetContent>
      </Sheet>
      
    )
  }
  export default Hamburger
  