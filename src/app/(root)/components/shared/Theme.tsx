'use client'
import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { theme } from "@/constants";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
const Theme = ()=>
{
    const {mode,setMode} = useTheme()
    let name = ""
    if(mode==="light")
    {
      name="☀️"
    }
    if(mode==="dark")
    {
     name ="🌙"
    }
    if(mode==="system")
    {
    name ="🌓"
    }
    return(
        <Menubar>
  <MenubarMenu>
    <MenubarTrigger>{name}</MenubarTrigger>
   
    <MenubarContent>
    {
      theme.map((item)=>
      (
       <MenubarItem key={item.name} >
        {item.name}
       </MenubarItem>
      )
    )}
      
    </MenubarContent>
  </MenubarMenu>
</Menubar>
    )
}
export default Theme