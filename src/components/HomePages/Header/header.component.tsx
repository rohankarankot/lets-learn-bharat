/* eslint-disable @next/next/no-img-element */
"use client";

import { PrimaryBtn } from "@/components/CustomButton/Buttons";
import Text from "@/components/CustomText/custom.component";
import { SearchInput } from "@/components/Input/input.component";
import { useState } from "react";

const Header = () => {
  const [searchData, setSearchData] = useState("");

  const handleChange = (event: any) => {
    const { value } = event.target; // You don't need to destructure event.target.value
    setSearchData(value);
  };
  const handlePress = () => {};
  return (
    <div className="flex-1 bg-[url('/images/vector-image.png')] bg-cover bg-center h-[65.22210184182015vh]  w-['100%']">
      <div className="flex justify-center my-[37px]">
        <SearchInput //  use Custom input
          placeholder="Search"
          name="search"
          value={searchData}
          onChange={(event: any) => handleChange(event)}
         
         height="7.042253521126761vh"
         width="47.447916666666664vw"
          prefix={
            <img
              src="/images/search-icon.png"
              className="h-6"
              alt="Search Icon"
            />
          } //prefix  here it is not compulsory
        />
      </div>
      <div className="flex justify-center">
        <Text
          text="Explore what professionals like you are learning the most"
          textType="p"
          // className="text-center"
          className="flex self-center w-[22rem] mt-[45px]"
        />
      </div>
      <div className="flex justify-end w-[65%]">
        <PrimaryBtn
         
          className={''}
          onClick={handlePress}
        >
          Visit Courses
        </PrimaryBtn>
      </div>
    </div>
  );
};

export default Header;
