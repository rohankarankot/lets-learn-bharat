'use client'
import Course from "@/components/AdminComponents/ShowCourse";
import User from "@/components/AdminComponents/User";
import AddCourse from "@/components/AdminComponents/addCourse.component";
import AddUser from "@/components/AdminComponents/addUser.component";
import Dashboard from "@/components/AdminComponents/dashboard.component";
import { initFlowbite } from "flowbite";
import { useEffect, useState } from "react";

const Pages = () => {
  const [selectTab, setSelectTab] = useState(0);

  useEffect(() => {
    initFlowbite();
  }, []);

  // Define different content for each tab
  const tabContents = [
  {key:1,component: <Dashboard/>},
  {key:1,component: <AddCourse/>},
  {key:1,component: <AddUser/>,},
  {key:1,component: <Course/>,},
  {key:1,component:  <User/>},
    
    
    
   
  ];

  return (
    <div className="flex ">
      <ul className="flex flex-col justify-around text-sm font-medium bg-SurfieGreen text-gray-500 dark:text-gray-400 h-screen">
        <li className="mr-2">
          <a
            href="#"
            className={`inline-block px-4 py-3 ${
              selectTab === 0 ? "text-green-300 rounded-lg active" : "rounded-lg text-white"
            }`}
            onClick={() => setSelectTab(0)}
          >
            Dashboard
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className={`inline-block px-4 py-3 ${
              selectTab === 1 ? "text-green-300 rounded-lg active" : "rounded-lg text-white"
            }`}
            onClick={() => setSelectTab(1)}
          >
            Add Course
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className={`inline-block px-4 py-3 ${
              selectTab === 2 ? "text-green-300 rounded-lg active" : "rounded-lg text-white"
            }`}
            onClick={() => setSelectTab(2)}
          >
            Add User
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className={`inline-block px-4 py-3 ${
              selectTab === 3 ? "text-green-300 rounded-lg active" : "rounded-lg text-white"
            }`}
            onClick={() => setSelectTab(3)}
          >
           Course
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`inline-block px-4 py-3 ${
              selectTab === 4 ? "text-green-300 rounded-lg active" : "rounded-lg text-white"
            }`}
            onClick={() => setSelectTab(4)}
          >
            Logout
          </a>
        </li>
      </ul>

      {/* Render the content based on the selected tab */}
     <div className="w-[100%]" key={selectTab}>
     {tabContents[selectTab].component}
     </div>
    </div>
  );
};

export default Pages;
