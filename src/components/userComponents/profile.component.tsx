import { PrimaryBtn } from "@/hoc/CustomButton/Buttons"
import React from "react"

const ProfileComponent = () => {
  const designation = "Student"
  return (
    <>
      <div>ProfileComponent</div>
      <div className="flex flex-col text-center gap-2">
        <h1 className="text-black font-bold text-4xl">Public profile</h1>
        <h1 className="text-black text-s">Add information about yourself</h1>
      </div>
      <div className="student-information m-[30px_150px]">
        <div className="basic-section">
          <p className="font-bold mb-2">Basics:</p>
          <div className="flex flex-col gap-6">
            <div className="p-[10px] border-2 border-bermuda">
              SK Tajuddin Ali
            </div>
            <div>
              <div className="p-[10px] border-2 border-bermuda flex flex-row justify-between">
                <p>{designation}</p>
                <p>{25 - designation?.length}</p>
              </div>
              <p className="text-xs">
                Add a professional headlines like, "Instructor at Learn Bharat"
                or "Nalla Bezorgar."
              </p>
            </div>
            <div></div>
          </div>
        </div>
        <div className="basic-section">
          <p className="font-bold mb-2">Links:</p>
          <div className="flex flex-col gap-6">
            <div className="p-[10px] border-2 border-bermuda">Website...</div>
            <div>
            <div className=" border-2 border-bermuda flex gap-2 ">
              <div className="p-[10px] bg-gray-100 text-black font-medium min-w-[225px]">http://www.facebook.com/</div>
              <div className="p-[10px] text-gray-500">Facebook Profile</div>
            </div>
            <p className="text-xs">
            Add your Facebook username (e.g. johnsmith).
              </p>
            </div>
            <div>
            <div className=" border-2 border-bermuda flex gap-2 ">
              <div className="p-[10px] bg-gray-100 text-black font-medium min-w-[225px]">http://www.linkedin.com/</div>
              <div className="p-[10px] text-gray-500">LinkedIn Profile</div>
            </div>
            <p className="text-xs">
            Input your LinkedIn username (e.g. johnsmith).
              </p>
            </div>
            <div>
            <div className=" border-2 border-bermuda flex gap-2 ">
              <div className="p-[10px] bg-gray-100 text-black font-medium min-w-[225px]">http://www.youtube.com/</div>
              <div className="p-[10px] text-gray-500">Youtube Profile</div>
            </div>
            <p className="text-xs">
            Input your Youtube username (e.g. johnsmith).
              </p>
            </div>
            <div>
            <div className=" border-2 border-bermuda flex gap-2 ">
              <div className="p-[10px] bg-gray-100 text-black font-medium min-w-[225px]">http://www.twitter.com/</div>
              <div className="p-[10px] text-gray-500">Twitter Profile</div>
            </div>
            <p className="text-xs">
            Input your Twitter  username (e.g. johnsmith).
              </p>
            </div>
            <div></div>
          </div>
        </div>
        <PrimaryBtn children={"Save"}/>
      </div>
    </>
  )
}

export default ProfileComponent
