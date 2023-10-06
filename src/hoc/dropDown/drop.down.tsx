
"use client"

import Link from "next/link";
import { useState } from "react";

const DropdownList = ({data,setAddDataForm,addDataForm}:any) => {
 const [hidden ,setHidden]=useState(true);
  return (
    <div className="w-full p-10 text-SurfieGreen">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className=" border-2 border-SurfieGreen "
        type="button"
        onClick={()=>setHidden(false)}
      >
      { `Choose Free? ${addDataForm.offer &&addDataForm.offer}`}
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdown"
        className={`z-10  ${hidden?'hidden':'unset'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li onClick={()=>{setAddDataForm({...addDataForm,offer:true}),setHidden(true)}}>
            <Link
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              True
            </Link>
          </li>
          <li onClick={()=>{setAddDataForm({...addDataForm,offer:false}),setHidden(true)}}>
          <Link
              href="#"
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
