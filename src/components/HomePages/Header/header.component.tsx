/* eslint-disable @next/next/no-img-element */
"use client"

import { PrimaryBtn } from "@/hoc/CustomButton/Buttons"
import Text from "@/hoc/CustomText/custom.component"
import { SearchInput } from "@/hoc/Input/input.component"
import Icon from "@/utils/icon/Icon"
import { useState } from "react"

const Header = () => {
  const [searchData, setSearchData] = useState("")

  const handleChange = (event: any) => {
    const { value } = event.target // You don't need to destructure event.target.value
    setSearchData(value)
  }
  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition

    const recognition = new SpeechRecognition()

    recognition.onresult = (event) => {
      console.log("Speech recognition result:", event)
      const transcript = event.results[0][0].transcript
      console.log("Recognized text:", transcript)
      setSearchData(transcript)
    }

    recognition.onend = () => {
      console.log("Speech recognition ended.")
    }

    recognition.onerror = (error) => {
      console.error("Speech recognition error:", error)
    }

    recognition.start()
  }

  console.log(searchData, "000") 
   const handlePress = () => {}
  return (
    <div className="flex-1 flex flex-col bg-[url('/images/vector-image.png')] bg-cover bg-center h-[65.22210184182015vh]  w-['100%']">
      <div className="flex self-center my-[37px] w-[50%] h-[50px] ">
        <SearchInput //  use Custom input
          placeholder="Search for courses"
          name="search"
          value={searchData}
          onChange={(event: any) => handleChange(event)}
          prefix={
            <img
              src="/images/search-icon.png"
              className="h-6"
              alt="Search Icon"
            />
          } //prefix  here it is not compulsory
          postFix={
            <Icon
              name="microphone"
              size={30}
              // onTouchStart={startListening}
              onMouseDown={startListening}
            />
          }
        />
      </div>
      <div className="flex justify-center">
        <Text
          text="Explore what professionals like you are learning the most"
          textType="p"
          // className="text-center"
          className="flex self-center w-[22rem] mb-[25px] text-pepermint font-bold text-2xl"
        />
      </div>
      <div className="flex justify-end w-[65%]">
        <PrimaryBtn className={""} onClick={handlePress}>
          Visit Courses
        </PrimaryBtn>
      </div>
    </div>
  )
}

export default Header
