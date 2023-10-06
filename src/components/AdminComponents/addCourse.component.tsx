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
   const [addSuccess,setAddSuccess]=useState(false);
  const fileInputRef: MutableRefObject<any> = useRef(null)
   const [hidden, setHidden] = useState(true);
  useEffect(() => {
    initFlowbite()
  }, [])
  const handleChange = (e: any) => {
    const { name, value } = e.target

    setAddDataForm({ ...addDataForm, [name]: value })
  }
  console.log('addDataForm.image', addDataForm.image)
 console.log('validationErrors',validationErrors )
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const id=Math.floor(Math.random()*500)
    try {
      await AddProductSchema.validate(addDataForm, { abortEarly: false })
      const db = getDatabase();
      // set(ref(db, '/courses/'+id ),addDataForm);
      setAddSuccess(true)
      setAddDataForm(initialValues)
      setHidden(false);
      setTimeout(()=>{
        setHidden(true);
      },3000)
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
    <>
    {
      addSuccess &&<div className="py-5 px-3"><Alert isHidden={hidden}>Success</Alert></div>
    }
    <form className="flex flex-col items-center gap-4 mt-3 p-7  overflow-y-scroll scroll-auto h-screen">
        <FormInput
        error={validationErrors?.title?.length > 0}
        helperText={validationErrors?.title}
      
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
          ref={fileInputRef}
          type="file"
          accept=".jpg, .png, .jpeg"
          style={{ display: "none" }} // Hide the file input
          onChange={handleFileChange}
        />
         {validationErrors?.tag?.length > 0 && (
        <h6 className="text-xs  font-semibold" style={{ color: "red" }}>
          {validationErrors?.file}
        </h6>
      )}
      </div>

      {/* {validationErrors?.images && <div className="error">{validationErrors?.images}</div>} */}
   
      <FormInput
       error={validationErrors?.time?.length > 0}
       helperText={validationErrors?.time}
        name="time"
        type="text"
        onChange={(e: any) => handleChange(e)}
        placeholder="Enter Time"
        value={addDataForm.time}
        className="w-[50%] bg-silver"
      />
      <FormInput
       error={validationErrors?.price?.length > 0}
       helperText={validationErrors?.price}
        name="price"
        type="text"
        onChange={(e: any) => handleChange(e)}
        placeholder="Enter product price"
        value={addDataForm.price}
        className="w-[50%] bg-silver"
      />
      <div className="flex  w-[50%]">
        <DropdownList data={data} setAddDataForm={setAddDataForm} addDataForm={addDataForm} />
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
      <FormInput
         error={validationErrors?.instituteName?.length > 0}
         helperText={validationErrors?.instituteName}
        name="instituteName"
        type="text"
        onChange={(e: any) => handleChange(e)}
        placeholder="Enter institute Name "
        value={addDataForm.instituteName}
        className="w-[50%] bg-silver"
      />
      <FormInput
        error={validationErrors?.rating?.length > 0}
        helperText={validationErrors?.rating}
        name="rating"
        type="text"
        onChange={(e: any) => handleChange(e)}
        placeholder="Enter Product overal rating"
        value={addDataForm.rating}
        className="w-[50%] bg-silver"
      />
      <FormInput
         error={validationErrors?.ratingCount?.length > 0}
         helperText={validationErrors?.ratingCount}
        name="ratingCount"
        type="text"
        onChange={(e: any) => handleChange(e)}
        placeholder="Enter Rating Count"
        value={addDataForm.ratingCount}
        className="w-[50%] bg-silver"
      />
    
      <PrimaryBtn onClick={(e: any) => handleSubmit(e)} className="mt-5">
        Add To Database
      </PrimaryBtn>
    </form>
    </>
  )
}

export default AddCourse
