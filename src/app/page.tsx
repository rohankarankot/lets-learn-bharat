"use client"

import DataComponent from "@/components/HomePages/DataComponent/CardData.component"
import Header from "@/components/HomePages/Header/header.component"
import Tab from "@/components/HomePages/Tab/tab.home.component"
import PopularTab from "@/components/HomePages/popularSearchTAb/popularTab.homepage.component"
import { fetchCmsData } from "@/redux/slice/action"

import "flowbite"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function Home() {
  const data = useSelector((state: any) => state.cmsData.cmsData)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCmsData())
  }, [])
  return (
    <>
      <div className="bg-pink">
        <Header />
        <Tab />
        <PopularTab/>
        <DataComponent />
      </div>
    </>
  )
}
