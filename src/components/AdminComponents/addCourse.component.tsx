"use client";
import { PrimaryBtn } from "@/hoc/CustomButton/Buttons";
import { FormInput } from "@/hoc/Input/input.component";
import DropdownList from "@/hoc/dropDown/drop.down";
import { addDoc, collection } from "firebase/firestore";
import { initFlowbite } from "flowbite";

import Validator from "@/utils/validation/form.validation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { db } from "../../../config/firebase.config";

const data = [{
    name: "offer",
    type: [
        true, false
    ]
},

]
const AddCourse = () => {
    const [addDataForm, setAddDataForm] = useState({
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

    })
    const [validationErrors, setValidationErrors] = useState({});
    const [sucess,setSucess]=useState(false);
    useEffect(() => {
        initFlowbite();
    }, []);
    const route=useRouter()
    const handleChange = (e: any) => {
      
        const { name, value } = e.target;
      const formvalidate=  Validator({name,value});
      console.log('formValidate', formvalidate)
        setAddDataForm({ ...addDataForm, [name]: value })
        setValidationErrors({ ...validationErrors, [name]: formvalidate })
    }
    const handleSubmit = async (e: any) => {
        const docRef = await addDoc(collection(db, "posts"), addDataForm).then(()=>{
          
        })
    }
    
    console.log('validationErrors',validationErrors )
    return (
        <div className="flex flex-col items-center gap-4 mt-3">
            <FormInput
                name="tag"
                type="text"
                onChange={(e: any) => handleChange(e)}
                placeholder="Enter Tag"
                value={addDataForm.tag}
                className="w-[60%]"
                
            />
             {/* {validationErrors.tag && <div className="error">{validationErrors.tag}</div>} */}
            <FormInput
                name="image"
                type="text"
                onChange={(e: any) => handleChange(e)}
                placeholder="Enter image url"
                value={addDataForm.image}
                className="w-[60%]"
            />
             {/* {validationErrors?.images && <div className="error">{validationErrors?.images}</div>} */}
            <FormInput
                name="title"
                type="text"
                onChange={(e: any) => handleChange(e)}
                placeholder="Enter title"
                value={addDataForm.title}
                className="w-[60%]"
            />
            <FormInput
                name="time"
                type="text"
                onChange={(e: any) => handleChange(e)}
                placeholder="Enter Time"
                value={addDataForm.time}
                className="w-[60%]"
            />
            <FormInput
                name="price"
                type="text"
                onChange={(e: any) => handleChange(e)}
                placeholder="Enter product price"
                value={addDataForm.price}
                className="w-[60%]"
            />
            <div className="flex justify-around w-[60%]">
                <DropdownList data={data} setAddDataForm={setAddDataForm} />
                <FormInput
                    name="offerPrice"
                    type="text"
                    onChange={(e: any) => handleChange(e)}
                    placeholder="Enter offer price "
                    value={addDataForm.offerPrice}
                    className="w-[20%]"
                />
            </div>
            <FormInput
                name="instituteName"
                type="text"
                onChange={(e: any) => handleChange(e)}
                placeholder="Enter instituteName name "
                value={addDataForm.instituteName}
                className="w-[60%]"
            />
            <FormInput
                name="rating"
                type="text"
                onChange={(e: any) => handleChange(e)}
                placeholder="Enter Product overal rating"
                value={addDataForm.rating}
                className="w-[60%]"
            />
            <FormInput
                name="ratingCount"
                type="text"
                onChange={(e: any) => handleChange(e)}
                placeholder="Enter Rating Count"
                value={addDataForm.ratingCount}
                className="w-[60%]"
            />
            <FormInput
                name="primaryAction"
                type="text"
                onChange={(e: any) => handleChange(e)}
                placeholder="Enter Button Name "
                value={addDataForm.primaryAction}
                className="w-[60%]"
            />
            <FormInput
                name="buttonType"
                type="text"
                onChange={(e: any) => handleChange(e)}
                placeholder="Enter Button Type "
                value={addDataForm.buttonType}
                className="w-[60%]"
            />
            <FormInput
                name="ctaLabel"
                type="text"
                onChange={(e: any) => handleChange(e)}
                placeholder="Enter link name "
                value={addDataForm.ctaLabel}
                className="w-[60%]"
            />
            <FormInput
                name="added"
                type="text"
                onChange={(e: any) => handleChange(e)}
                placeholder="Enter added url"
                value={addDataForm.added}
                className="w-[60%]"
            />
            <PrimaryBtn onClick={(e: any) => handleSubmit(e)}> Add To Database</PrimaryBtn>
        </div>
    );
};

export default AddCourse;

