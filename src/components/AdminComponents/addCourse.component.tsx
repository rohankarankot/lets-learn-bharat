"use client"
import { PrimaryBtn } from "@/hoc/CustomButton/Buttons"
import { FormInput } from "@/hoc/Input/input.component"
import DropdownList from "@/hoc/dropDown/drop.down"
import { getDatabase, ref, set } from "firebase/database"
import { initFlowbite } from "flowbite"
import { MutableRefObject, useEffect, useRef, useState } from "react"
import {
  AddProductInterface,
  AddProductSchema,
} from "./schemas/admin-schemas.schema"
import * as Yup from "yup"

const data = [
  {
    name: "offer",
    type: [true, false],
  },
]
const initialValues = {
  tag: "",
  image: "",
  title: "",
  time: "",
  price: "",
  offer: false,
  offerPrice: "",
  instituteName: "",
  rating: "",
  ratingCount: "",
  primaryAction: "",
  buttonType: "",

  ctaLabel: "",
  added: "",
}
const AddCourse = () => {
  const [addDataForm, setAddDataForm] =
    useState<AddProductInterface>(initialValues)
  console.log("addDataForm: ", addDataForm)
  const [validationErrors, setValidationErrors] = useState<any>({})
  console.log("validationErrors: ", validationErrors)

  const fileInputRef: MutableRefObject<any> = useRef(null)
  useEffect(() => {
    initFlowbite()
  }, [])
  const handleChange = (e: any) => {
    const { name, value } = e.target

    setAddDataForm({ ...addDataForm, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await AddProductSchema.validate(addDataForm, { abortEarly: false })
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
  const handleFileUpload = () => {
    // Click the hidden file input to trigger the file selection dialog
    fileInputRef.current.click()
  }

  const handleFileChange = (e: any) => {
    const file = e.target.files[0]
    const imageUrl = URL?.createObjectURL(file)

    if (file) {
      // Handle the uploaded file here (e.g., upload to a server or save it)
      console.log("Uploaded file:", file)
      setAddDataForm({ ...addDataForm, image: imageUrl })
    }
  }

  return (
    <form className="flex flex-col items-center gap-4 mt-3 p-7  overflow-y-scroll scroll-auto h-screen">
      <FormInput
        error={validationErrors?.tag?.length > 0}
        helperText={validationErrors?.tag}
        name="tag"
        type="text"
        onChange={(e: any) => handleChange(e)}
        placeholder="Enter Tag Nam"
        value={addDataForm.tag}
        className="w-[50%] bg-silver"
      />

      <div
        className="h-[4.042253521126761vh] w-full border-2 border-grey-700 rounded-sm  flex items-center pl-3 bg-silver w-[50%]"
        onClick={handleFileUpload}
      >
        <button>
          {" "}
          {addDataForm.image == "" ? "Upload File" : "Already Uploaded"}{" "}
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept=".jpg, .png, .jpeg"
          style={{ display: "none" }} // Hide the file input
          onChange={handleFileChange}
        />
      </div>

      {/* {validationErrors?.images && <div className="error">{validationErrors?.images}</div>} */}
      <FormInput
        error
        helperText="dfg"
        name="title"
        type="text"
        onChange={(e: any) => handleChange(e)}
        placeholder="Enter title"
        value={addDataForm.title}
        className="w-[50%] bg-silver"
      />
      <FormInput
        error
        helperText="dfg"
        name="time"
        type="text"
        onChange={(e: any) => handleChange(e)}
        placeholder="Enter Time"
        value={addDataForm.time}
        className="w-[50%] bg-silver"
      />
      <FormInput
        error
        helperText="dfg"
        name="price"
        type="text"
        onChange={(e: any) => handleChange(e)}
        placeholder="Enter product price"
        value={addDataForm.price}
        className="w-[50%] bg-silver"
      />
      <div className="flex justify-around w-[50%]">
        <DropdownList data={data} setAddDataForm={setAddDataForm} />
        <FormInput
          error
          helperText="dfg"
          name="offerPrice"
          type="text"
          onChange={(e: any) => handleChange(e)}
          placeholder="Enter offer price "
          value={addDataForm.offerPrice}
          className="w-[13%] sm:w-[20%]"
        />
      </div>
      <FormInput
        error
        helperText="dfg"
        name="instituteName"
        type="text"
        onChange={(e: any) => handleChange(e)}
        placeholder="Enter instituteName name "
        value={addDataForm.instituteName}
        className="w-[50%] bg-silver"
      />
      <FormInput
        error
        helperText="dfg"
        name="rating"
        type="text"
        onChange={(e: any) => handleChange(e)}
        placeholder="Enter Product overal rating"
        value={addDataForm.rating}
        className="w-[50%] bg-silver"
      />
      <FormInput
        error
        helperText="dfg"
        name="ratingCount"
        type="text"
        onChange={(e: any) => handleChange(e)}
        placeholder="Enter Rating Count"
        value={addDataForm.ratingCount}
        className="w-[50%] bg-silver"
      />
      <FormInput
        error
        helperText="dfg"
        name="primaryAction"
        type="text"
        onChange={(e: any) => handleChange(e)}
        placeholder="Enter Button Name "
        value={addDataForm.primaryAction}
        className="w-[50%] bg-silver"
      />
      <FormInput
        error
        helperText="dfg"
        name="buttonType"
        type="text"
        onChange={(e: any) => handleChange(e)}
        placeholder="Enter Button Type "
        value={addDataForm.buttonType}
        className="w-[50%] bg-silver"
      />
      <FormInput
        error
        helperText="dfg"
        name="ctaLabel"
        type="text"
        onChange={(e: any) => handleChange(e)}
        placeholder="Enter link name "
        value={addDataForm.ctaLabel}
        className="w-[50%] bg-silver"
      />
      <FormInput
        error
        helperText="dfg"
        name="added"
        type="text"
        onChange={(e: any) => handleChange(e)}
        placeholder="Enter added url"
        value={addDataForm.added}
        className="w-[50%] bg-silver"
      />
      <PrimaryBtn onClick={(e: any) => handleSubmit(e)} className="mt-5">
        Add To Database
      </PrimaryBtn>
    </form>
  )
}

export default AddCourse
