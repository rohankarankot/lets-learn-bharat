"use client"

import ProfileComponent from '@/components/userComponents/profile.component';
import UserDashboardComponent from '@/components/userComponents/userDashboard.component';
import React,{useState} from 'react'

const UserPanel = () => {
    
    const [tab,setTab] = useState<number>(0)
    const tabContents = [
        {key:1,component: <UserDashboardComponent/>},
        {key:1,component: <ProfileComponent/>},
        {key:1,component: <UserDashboardComponent/>},
    ]

    

    const setTabData =(tabIndex:any)=>{
        setTab(tabIndex)
    }
  return (
    <div className="flex ">
      <ul className="flex flex-col justify-around text-sm font-medium bg-SurfieGreen text-gray-500 dark:text-gray-400 h-auto">
        <li className="mr-2">
          <a
            href="#"
            className={`inline-block px-4 py-3 ${
            tab === 0 ? "text-green-300 rounded-lg active" : "rounded-lg text-white"
            }`}
            onClick={() => setTab(0)}
          >
            Profile
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className={`inline-block px-4 py-3 ${
              tab === 1 ? "text-green-300 rounded-lg active" : "rounded-lg text-white"
            }`}
            onClick={() => setTabData(1)}
          >
            Overview
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`inline-block px-4 py-3 ${
              tab === 2 ? "text-green-300 rounded-lg active" : "rounded-lg text-white"
            }`}
            onClick={()=>setTabData(4)}
          >
            Logout
          </a>
        </li>
      </ul>

      {/* Render the content based on the selected tab */}
     <div className="w-[100%]" key={tab}>
     {tab}
     {tabContents[tab].component}
     </div>
    </div>
  )
}

export default UserPanel