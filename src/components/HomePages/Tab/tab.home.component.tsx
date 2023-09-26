"use client";
import Text from "@/components/CustomText/custom.component";
import { Size } from "@/components/utils/Size/screen.Size";
import { useState } from "react";
//this data for type of tab
const data = [
  {
    image: "images/Vector (4).png",
  },
  {
    image: "images/Group 1606.png",
  },
  {
    image: "images/Vector (6).png",
  },
  {
    image: "images/Vector (9).png",
  },
];
//this tab use for search filter of course type
const Tab = () => {
  const { fullWidth } = Size();
  const [clickedData, setClickData] = useState(0);
  const handleClick = (index: number) => {
    setClickData(index);
  };
  const isMobile = fullWidth <= 768;

  return (
    <div className="w-full">
      <div className="flex justify-evenly items-center bg-colors-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] h-[16vh] md:h-32  w-full">
        {data.map((allData, index) => {
          return (
            <div
              onClick={() => handleClick(index)}
              key={index}
              // className=""
            >
              {!isMobile ? (
                <img src={allData.image} alt="///" />
              ) : (
                index <= 1 && <img src={allData.image} className="h-[20px]" />
              )}
            </div>
          );
        })}
        {isMobile && (
            <li className="items-center">
          <button
            
          id="dropdownNavbarLink"
          data-dropdown-toggle="dropdownNavbar"
          className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
          >
            More
          </button>
         
             
          </li>
          
        )}
      </div>
      <div>
        {/* useing Custom Text  */}
        <Text text="Popular courses" textType="h1" className="text-2xl" />
      </div>
     
    </div>
  );
};

export default Tab;
