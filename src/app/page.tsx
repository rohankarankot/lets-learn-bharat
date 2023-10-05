"use client"

import DataComponent from "@/components/HomePages/DataComponent/CardData.component"
import Header from "@/components/HomePages/Header/header.component"
import Tab from "@/components/HomePages/Tab/tab.home.component"
import { store } from "@/redux/store"
import "flowbite"
import { useEffect } from "react"
import { Provider, useSelector } from "react-redux"
// import { createContext } from "vm"
export default function Home() {
  useEffect(() =>{
    apiData()
  })
  const apiData=async()=>{

  }
  // let Context = createContext();
const data=useSelector((state:any)=>state.cmsData)
console.log('data//...', data)
  return (
    <Provider store={store}>
      <div className="bg-pink">
        <Header />
        <Tab />
        <DataComponent />
      </div>
    </Provider>
  )
}
