"use client"

import DataComponent from "@/components/HomePages/DataComponent/CardData.component"
import Header from "@/components/HomePages/Header/header.component"
import Tab from "@/components/HomePages/Tab/tab.home.component"
import { store } from "@/components/redux/store"
import "flowbite"
import { initFlowbite } from "flowbite"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Provider } from "react-redux"
// import { createContext } from "vm"
export default function Home() {

  // let Context = createContext();


  useEffect(() => {
    initFlowbite()
    //dispatch(AllCmsData())
  }, [])

  return (
    <Provider store={store}>
   <div className="bg-pink">
   <Header/>
   <Tab/>
   <DataComponent/>
   </div>
   </Provider>
  )
}
