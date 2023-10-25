"use client";

import { initFlowbite } from "flowbite";
import Link from "next/link";
import { useEffect, useState } from "react";

const DropdownList = ({ data, setAddDataForm, addDataForm }: any) => {
  const [hidden ,setHidden]=useState(true);
  useEffect(() => {
    initFlowbite();
  });
  return (
  
    <div id={data?.name} >
      <button
        id="dropdownOffsetButton"
        data-dropdown-toggle={`dropdownOffset${data.name}`}
        data-dropdown-offset-distance="35"
        data-dropdown-offset-skidding="0"
        className="text-ash rounded-sm bg-silver  font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center w-full"
        type="button"
      >
       { data?.placeholder}
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
      </button>

      <div
        id={`dropdownOffset${data.name}`}
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-[50%] dark:bg-gray-700 relative top-0"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefault"
        >
        
          <li  onClick={()=>{setAddDataForm({...addDataForm,[data.name]:true}),setHidden(true)}}>
            <Link
            href={'#'}
             
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              True
            </Link>
          </li>
          <li   onClick={()=>{setAddDataForm({...addDataForm,[data.name]:false}),setHidden(true)}}>
            <Link
            
              href={'#'}
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
             False
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropdownList;
