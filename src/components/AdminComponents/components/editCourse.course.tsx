import { PrimaryBtn } from "@/hoc/CustomButton/Buttons"
import { getDatabase, ref, update } from "firebase/database"
import { useState } from "react"
import { useSelector } from "react-redux"
import inputData from "../../../mock-data/userInput.json"
import {
  AddProductInterface,
  AddProductSchema,
} from "../schemas/admin-schemas.schema"

import { FormInput } from "@/hoc/Input/input.component"
import DropdownList from "@/hoc/dropDown/drop.down"
import * as Yup from "yup"
const EditCourse = ({ initialValues, id }: any) => {
  const [addDataForm, setAddDataForm] =
    useState<AddProductInterface>(initialValues)
  const [validationErrors, setValidationErrors] = useState<any>({})
  const [addSuccess, setAddSuccess] = useState(false)
  const [hidden, setHidden] = useState(true)
  const data = useSelector((state: any) => state.cmsData.cmsData)
  const handleChange = (e: any) => {
    const { name, value } = e.target
    setAddDataForm({ ...addDataForm, [name]: value })
  }
  const getImageFileObject = (file: any) => {}
  const handleFileChange = () => {}
  console.log("initialValues2", initialValues)
  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {
      await AddProductSchema.validate(addDataForm, { abortEarly: false })
      const db = getDatabase()
      update(ref(db, "/courses/" + id), addDataForm)
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
  return (
    <>
      <form className="flex flex-col items-center gap-4 mt-3 p-7  h-screen">
        {inputData?.map((allInputData, index) => {
          const name: any = allInputData.name
          return allInputData.name === "image" ? (
            <input />
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

export default EditCourse
