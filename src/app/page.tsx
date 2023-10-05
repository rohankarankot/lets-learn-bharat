"use client"

import DataComponent from "@/components/HomePages/DataComponent/CardData.component";
import Header from "@/components/HomePages/Header/header.component";
import Tab from "@/components/HomePages/Tab/tab.home.component";
import { fetchCmsData } from "@/redux/slice/cmsData.slice";
import "flowbite";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
 const data=useSelector((state:any)=>state.cmsData.cmsData);
 const dispatch=useDispatch();
 useEffect(()=>{
  console.log('hfkl' ) 
 dispatch(fetchCmsData())
 },[])
 console.log('state', data)

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
