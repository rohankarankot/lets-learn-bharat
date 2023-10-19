"use client";

import { LinkBtn, PrimaryBtn, SecondaryBtn } from "@/hoc/CustomButton/Buttons";
import { CONSTANT, IMAGES } from "@/utils/constant";
import { Fragment, useState } from "react";
import { AddIcon, AddedIcon } from "./customIcon";
// import Button from './CustomButton/Button.component'

interface CardWithLeftContent {
  tag: string;
  image: string;
  title: string;
  duration: string;
  price: string;
  offerPrice: string;
  instituteName: string;
  rating: string;
  ratingCount: string;
  primaryAction: string;
  ctaLabel: string;
}

const CardWithLeftContent = ({ data }: any) => {
  const [addItem, setAddItem] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  console.log("data", data);
  return (
    <Fragment>
      <div
        className="flex flex-col w-[289px] h-[100%] items-center gap-2"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className="shadow-3xl">
          <div className="relative">
            {data?.image && (
              <div>
                <img src={data?.image} alt="card-image" />
              </div>
            )}
            {data?.tag && (
              <div className="absolute top-0 px-5 py-2 text-white text-xs font-bold bg-chilly">
                {data?.tag}
              </div>
            )}
          </div>
          <div className="mt-4 ml-2.5 mb-7 mr-5">
            <div className="flex justify-between item-center">
              <div>
                {data?.title && (
                  <div className="text-xl font-bold text-pepermint">
                    {data.title.length > 20
                      ? `${data.title.substring(0, 20)}...`
                      : data?.title}
                  </div>
                )}
                {data?.duration && data?.time && (
                  <div className="text-base font-bold">
                    {data?.duration} : {data?.time}
                  </div>
                )}
              </div>
              {isHovering && (
                <div onClick={() => setAddItem(!addItem)}>
                  {addItem ? (
                    <>
                      <AddedIcon />
                      <div className="text-maroon text-xs font-bold text-center">
                        {CONSTANT?.ADDED}
                      </div>
                    </>
                  ) : (
                    <>
                      <AddIcon sx={{ width: "35px" }} />
                      <div className="text-offWhite text-xs font-bold text-center">
                        {CONSTANT?.ADD}
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
            <div className="flex gap-2.5">
              {data?.price && (
                <div
                  className="text-base text-ash"
                  style={{
                    textDecoration: data?.offer ? "line-through" : "unset",
                  }}
                >
                  {data?.price}
                </div>
              )}
              {data?.offerPrice && (
                <div className="text-base font-style: italic text-red-600 font-bold">
                  {data?.offerPrice}
                </div>
              )}
            </div>
            {data?.instituteName && (
              <div className="w-[69px] h-[10px] mt-[8px] mb-[11px]">
                <img src={IMAGES?.KHAN_ACADEMY} alt="institue-name" />
              </div>
            )}
            <div className="flex gap-0.5">
              <div className="flex items-center space-x-1">
                <svg
                  className="w-5 h-5 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-5 h-5 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-5 h-5 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-5 h-5 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-5 h-5 text-gray-300 dark:text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
              {data?.ratingCount && (
                <div className="text-base">(${data?.ratingCount})</div>
              )}
            </div>
            <div className="flex justify-center py-7">
              {data.free ? (
                <SecondaryBtn
                  className="border-2 rounded-md border-bermuda py-2 px-7 cursor-pointer text-base font-bold"
                  fontSize="16px"
                  txtColor="bermunda"
                  isButton={true}
                  onClick={() => {}}
                >
                  {data?.primaryAction}
                </SecondaryBtn>
              ) : (
                <PrimaryBtn></PrimaryBtn>
              )}
            </div>
          </div>
        </div>
        <LinkBtn
          className="text-center text-base font-bold  cursor-pointer -mt-4"
          fontSize="16px"
          isButton={false}
          onClick={() => {
            alert("clickyyyy");
          }}
        >
          {data?.ctaLabel}
        </LinkBtn>
      </div>
    </Fragment>
  );
};
export default CardWithLeftContent;
