"use client"

import Header from "@/components/HomePages/Header/header.component"
import Tab from "@/components/HomePages/Tab/tab.home.component"
import "flowbite"
import { initFlowbite } from "flowbite"
import { useEffect } from "react"
export default function Home() {
  useEffect(() => {
    initFlowbite()
  }, [])

  return (
   <div className="bg-pink">
   <Header/>
   <Tab/>
   </div>
  )
}
