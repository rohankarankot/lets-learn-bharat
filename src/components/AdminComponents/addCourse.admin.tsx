"use client";
import Alert from "@/hoc/Alert/custum.alert";
import { PrimaryBtn } from "@/hoc/CustomButton/Buttons";
import { FormInput } from "@/hoc/Input/input.component";
import DropdownList from "@/hoc/dropDown/drop.down";
import { getDatabase, ref, set } from "firebase/database";
import { initFlowbite } from "flowbite";
import { useEffect, useMemo, useState } from "react";
import * as Yup from "yup";
import inputData from "../../mock-data/userInput.json";
import {
  AddProductInterface,
  AddProductSchema,
} from "./schemas/admin-schemas.schema";

const data = [
  {
    name: "free",
    type: [true, false],
  },
];
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
};
const AddCourse = () => {
  const [addDataForm, setAddDataForm] =
    useState<AddProductInterface>(initialValues);
    const [image, setImage] = useState(null);
    const [createObjectURL, setCreateObjectURL] = useState('');
  const [validationErrors, setValidationErrors] = useState<any>({});
  const [addSuccess, setAddSuccess] = useState(false);
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    initFlowbite();
  }, []);
  const id = useMemo(() => {
    return Math.floor(Math.random() * 500);
  }, [addSuccess]);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    // setAddDataForm({...addDataForm,id:id})
    setAddDataForm({ ...addDataForm, [name]: value, id: id });
  };
  console.log("id", id);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await AddProductSchema.validate(addDataForm, { abortEarly: false });
      const db = getDatabase();
      await set(ref(db, "/courses/" + id), addDataForm);
      setAddSuccess(true);
      setAddDataForm(initialValues);
      setHidden(false);
      setTimeout(() => {
        setHidden(true);
      }, 3000);
    } catch (error) {
      // Validation failed, set the validation errors
      console.log("error", error);
      if (error instanceof Yup.ValidationError) {
        const errors: { [key: string]: string } = {};
        error.inner.forEach((err) => {
          if (err.path) {
            errors[err.path] = err.message;
          }
        });
        setValidationErrors(errors);
      }
    }
  };

  const handleFileUploade = (e: any) => {
    const img=e.target.files[0];
    setAddDataForm({ ...addDataForm, image:img?.name  });
  };
  const uploadToClient = (event:any) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setAddDataForm({...addDataForm,image:URL.createObjectURL(i)});
    }
  };

  const uploadToServer = async (event:any) => {    
    uploadToClient(event)
    const body = new FormData();
    // console.log("file", image)
    body.append("file", addDataForm.image);    
    const response = await fetch("/api/upload", {
      method: "POST",
      body
    });
    console.log('response', response)
   // setAddDataForm({...addDataForm,image:response?.url})
  };
  console.log('addDataForm', addDataForm)
  return (
    <>
      {addSuccess && (
        <div className="py-5 px-3">
          <Alert isHidden={hidden}>Success</Alert>
        </div>
      )}
      <form className="flex flex-col items-center gap-4 mt-3 p-7  overflow-y-scroll scroll-auto h-screen w-[80%]">
        {inputData?.map((allInputData, index) => {
          const name: any = allInputData.name;
          return allInputData.name === "image" ? (
            <input type="file" onChange={(e) => uploadToServer(e)} />
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
          );
        })}

        <PrimaryBtn onClick={(e: any) => handleSubmit(e)} className="mt-5">
          Add To Database
        </PrimaryBtn>
      </form>
    </>
  );
};

export default AddCourse;
