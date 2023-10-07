"use client"
import Alert from "@/hoc/Alert/custum.alert"
import { PrimaryBtn } from "@/hoc/CustomButton/Buttons"
import { FormInput } from "@/hoc/Input/input.component"
import DropdownList from "@/hoc/dropDown/drop.down"
import { getDatabase } from "firebase/database"
import { initFlowbite } from "flowbite"
import { MutableRefObject, useEffect, useRef, useState } from "react"
import * as Yup from "yup"
import {
  AddProductInterface,
  AddProductSchema,
} from "./schemas/admin-schemas.schema"
import inputData from "../../mock-data/userInput.json"
import ImageUploader from "react-image-upload"

const data = [
  {
    name: "offer",
    type: [true, false],
  },
]
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
const AddCourse = () => {
  const [addDataForm, setAddDataForm] =
    useState<AddProductInterface>(initialValues)

  const [validationErrors, setValidationErrors] = useState<any>({})
  const [addSuccess, setAddSuccess] = useState(false)
  const fileInputRef: MutableRefObject<any> = useRef(null)
  const [hidden, setHidden] = useState(true)
  useEffect(() => {
    initFlowbite()
  }, [])
  const handleChange = (e: any) => {
    const { name, value } = e.target

    setAddDataForm({ ...addDataForm, [name]: value })
  }
  console.log("addDataForm.image", addDataForm.image)
  console.log("validationErrors", validationErrors)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const id = Math.floor(Math.random() * 500)
    try {
      await AddProductSchema.validate(addDataForm, { abortEarly: false })
      const db = getDatabase()
      // set(ref(db, '/courses/'+id ),addDataForm);
      setAddSuccess(true)
      setAddDataForm(initialValues)
      setHidden(false)
      setTimeout(() => {
        setHidden(true)
      }, 3000)
    } catch (error) {
      // Validation failed, set the validation errors
      if (error instanceof Yup.ValidationError) {
        const errors: { [key: string]: string } = {}
        error.inner.forEach((err) => {
          if (err.path) {
            errors[err.path] = err.message
          }
        })
        setValidationErrors(errors)
      }
    }
  }
  console.log("====", addDataForm)
  const handleFileUpload = () => {
    // Click the hidden file input to trigger the file selection dialog
    fileInputRef.current.click()
  }

  const getImageFileObject = (file: any) => {
    console.log("file", file)
  }

  return (
    <>
      {addSuccess && (
        <div className="py-5 px-3">
          <Alert isHidden={hidden}>Success</Alert>
        </div>
      )}
      <form className="flex flex-col items-center gap-4 mt-3 p-7  overflow-y-scroll scroll-auto h-screen">
        {inputData?.map((allInputData, index) => {
          const name: any = allInputData.name
          return allInputData.name === "image" ? (
            <ImageUploader
              onFileAdded={(img) => getImageFileObject(img)}
              // onFileRemoved={(img) => runAfterImageDelete(img)}
            />
          ) : index != 4 ? (
            <FormInput
              key={name}
              error={
                validationErrors?.[name as keyof AddProductInterface]?.length >
                0
              }
              helperText={validationErrors?.[name as keyof AddProductInterface]}
              name={name}
              type="text"
              onChange={handleChange}
              placeholder={`Enter ${name}`}
              value={String(addDataForm[name as keyof AddProductInterface])}
              className="w-[50%] bg-silver"
            />
          ) : (
            <div className="flex  w-[50%]">
              <DropdownList
                data={data}
                setAddDataForm={setAddDataForm}
                addDataForm={addDataForm}
              />
              <FormInput
                error={validationErrors?.offerPrice?.length > 0}
                helperText={validationErrors?.offerPrice}
                name="offerPrice"
                type="text"
                // /type={addDataForm.offer?"text":'hidden'}
                onChange={(e: any) => handleChange(e)}
                placeholder="Enter offer price "
                value={addDataForm.offerPrice}
                // isDisabled={!addDataForm.offer}
              />
            </div>
          )
        })}

        <PrimaryBtn onClick={(e: any) => handleSubmit(e)} className="mt-5">
          Add To Database
        </PrimaryBtn>
      </form>
    </>
  )
}

export default AddCourse
