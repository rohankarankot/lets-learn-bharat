"use client"
import { Database } from "@/app/db/database"
import Alert from "@/hoc/Alert/custum.alert"
import { PrimaryBtn } from "@/hoc/CustomButton/Buttons"
import { FormInput } from "@/hoc/Input/input.component"
import DropdownList from "@/hoc/dropDown/drop.down"
import { ref, set } from "firebase/database"
import { initFlowbite } from "flowbite"
import { useEffect, useMemo, useState } from "react"
import * as Yup from "yup"
import inputData from "../../mock-data/userInput.json"
import {
  AddProductInterface,
  AddProductSchema,
} from "./schemas/admin-schemas.schema"

const data = [
  {
    name: "free",
    type: [true, false],
  },
]
const initialValues = {
  image: "",
  title: "",
  time: "",
  price: "",
  free: false,
  offerPrice: "",
  instituteName: "",
  rating: "",
  ratingCount: "",
  id: "",
  isCertification:false,
}
const AddCourse = () => {
  const [addDataForm, setAddDataForm] =
    useState<AddProductInterface>(initialValues)
  const [validationErrors, setValidationErrors] = useState<any>({})
  const [addSuccess, setAddSuccess] = useState(false)
  const [hidden, setHidden] = useState(true)
  useEffect(() => {
    initFlowbite()
  }, [])
  const id = useMemo(() => {
    return Math.floor(Math.random() * 500)
  }, [addSuccess])
  console.log(addDataForm.isCertification,addDataForm.free,"===")
  const handleChange = (e: any) => {
    const { name, value } = e.target
    setAddDataForm({ ...addDataForm, [name]: value, id: id })
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await AddProductSchema.validate(addDataForm, { abortEarly: false })

      await set(ref(Database(), "/courses/" + id), addDataForm)
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

  const uploadToClient = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0]

      setAddDataForm({ ...addDataForm, image: URL.createObjectURL(i) })
    }
  }

  const uploadToServer = async (event: any) => {
    uploadToClient(event)
    const body = new FormData()
    body.append("file", addDataForm.image)
    const response = await fetch("/api/upload", {
      method: "POST",
      body,
    })
  }
  return (
    <>
      {addSuccess && (
        <div className="py-5 px-3">
          <Alert isHidden={hidden}>Success</Alert>
        </div>
      )}
      <form className="flex flex-col items-center gap-4 mt-3 p-7  overflow-y-scroll scroll-auto h-screen w-[80%]">
        {inputData?.map((allInputData, index) => {
          const name: any = allInputData.name
          return allInputData.name === "image" ? (
            <input type="file" onChange={(e) => uploadToServer(e)}  />
          ) : allInputData.type !=="dropDown" ? (
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
            <div className="w-full bg-silver">
              <DropdownList
            data={allInputData}
            setAddDataForm={setAddDataForm}
            addDataForm={addDataForm}
            style={"w-[50%] bg-silve"}
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
