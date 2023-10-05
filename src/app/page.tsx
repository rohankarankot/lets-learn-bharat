"use client"

import DataComponent from "@/components/HomePages/DataComponent/CardData.component"
import Header from "@/components/HomePages/Header/header.component"
import Tab from "@/components/HomePages/Tab/tab.home.component"
import "flowbite"

export default function Home() {
 

  

  return (
    <>
      <div className="bg-pink">
        <Header />
        <Tab />
        <DataComponent />
      </div>
    </>
  )
}
