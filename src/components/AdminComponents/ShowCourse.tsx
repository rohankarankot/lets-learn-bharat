"use client"
import Card from "@/hoc/Card/custum.card"
import { FormInput } from "@/hoc/Input/input.component"
import Image from "next/image"
import { useState } from "react"
import { useSelector } from "react-redux"
import { AddProductInterface } from "./schemas/admin-schemas.schema"
import DropdownList from "@/hoc/dropDown/drop.down"
import { PrimaryBtn } from "@/hoc/CustomButton/Buttons"
const initialValues = {
  image: "",
  title: "",
  time: "",
  price: "",
  offer: false,
  offerPrice: "",
  instituteName: "",
  rating: "",
  ratingCount: "",
}
const Course = () => {
  const [addDataForm, setAddDataForm] =
    useState<AddProductInterface>(initialValues)
  const [isEdit, setIsEdit] = useState(false)
  const data = useSelector((state: any) => state.cmsData.cmsData)
  const handleChange = (e: any) => {}
  const handleFileUpload = () => {}
  const handleFileChange = () => {}
  console.log("data", data)
  return (
    <>
      <div className="flex gap-5 mx-5 my-5">
        {data?.map((courseData: any) => {
          return (
            <Card className=" flex p-2 gap-2">
              <Image src={courseData?.image} height={120} width={120} alt="" />
              <p className="px-5"> {courseData.title}</p>
              <p
                className="cursor-pointer"
                onClick={() => {
                  setIsEdit(true)
                }}
              >
                {"..."}
              </p>
            </Card>
          )
        })}
      </div>
      {isEdit && (
        <form className="flex flex-col items-center gap-4 mt-3 p-7  overflow-y-scroll scroll-auto h-screen">
          <FormInput
            // error={validationErrors?.title?.length > 0}
            // helperText={validationErrors?.title}
            name="title"
            type="text"
            onChange={(e: any) => handleChange(e)}
            placeholder="Enter title"
            value={addDataForm.title}
            className="w-[50%] bg-silver"
          />

          <div
            className="h-[4.042253521126761vh] w-full border-2 border-grey-700 rounded-sm  flex items-center pl-3 bg-silver "
            onClick={handleFileUpload}
          >
            <div>
              {addDataForm.image == "" ? "Upload File" : "Already Uploaded"}{" "}
            </div>
            <input
              // ref={fileInputRef}
              type="file"
              accept=".jpg, .png, .jpeg"
              style={{ display: "none" }} // Hide the file input
              onChange={handleFileChange}
            />
            {/* {validationErrors?.tag?.length > 0 && (
              <h6 className="text-xs  font-semibold" style={{ color: "red" }}>
                {validationErrors?.file}
              </h6>
            )} */}
          </div>

          {/* {validationErrors?.images && <div className="error">{validationErrors?.images}</div>} */}

          <FormInput
            // error={validationErrors?.time?.length > 0}
            // helperText={validationErrors?.time}
            name="time"
            type="text"
            onChange={(e: any) => handleChange(e)}
            placeholder="Enter Time"
            value={addDataForm.time}
            className="w-[50%] bg-silver"
          />
          <FormInput
            // error={validationErrors?.price?.length > 0}
            // helperText={validationErrors?.price}
            name="price"
            type="text"
            onChange={(e: any) => handleChange(e)}
            placeholder="Enter product price"
            value={addDataForm.price}
            className="w-[50%] bg-silver"
          />
          <div className="flex  w-[50%]">
            <DropdownList
              data={data}
              setAddDataForm={setAddDataForm}
              addDataForm={addDataForm}
            />
            <FormInput
              // error={validationErrors?.offerPrice?.length > 0}
              // helperText={validationErrors?.offerPrice}
              name="offerPrice"
              type="text"
              // /type={addDataForm.offer?"text":'hidden'}
              onChange={(e: any) => handleChange(e)}
              placeholder="Enter offer price "
              value={addDataForm.offerPrice}
              // isDisabled={!addDataForm.offer}
            />
          </div>
          <FormInput
            // error={validationErrors?.instituteName?.length > 0}
            // helperText={validationErrors?.instituteName}
            name="instituteName"
            type="text"
            onChange={(e: any) => handleChange(e)}
            placeholder="Enter institute Name "
            value={addDataForm.instituteName}
            className="w-[50%] bg-silver"
          />
          <FormInput
            // error={validationErrors?.rating?.length > 0}
            // helperText={validationErrors?.rating}
            name="rating"
            type="text"
            onChange={(e: any) => handleChange(e)}
            placeholder="Enter Product overal rating"
            value={addDataForm.rating}
            className="w-[50%] bg-silver"
          />
          <FormInput
            // error={validationErrors?.ratingCount?.length > 0}
            // helperText={validationErrors?.ratingCount}
            name="ratingCount"
            type="text"
            onChange={(e: any) => handleChange(e)}
            placeholder="Enter Rating Count"
            value={addDataForm.ratingCount}
            className="w-[50%] bg-silver"
          />

          <PrimaryBtn onClick={{}} className="mt-5">
            Add To Database
          </PrimaryBtn>
        </form>
      )}
    </>
  )
}

export default Course
