'use client'
import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
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
    return(
        <Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        Light Mode 
      </MenubarItem>
      <MenubarSeparator/>
      <MenubarItem>Dark Mode</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Default Mode</MenubarItem>
      
      
    </MenubarContent>
  </MenubarMenu>
</Menubar>
    )
}
export default Theme