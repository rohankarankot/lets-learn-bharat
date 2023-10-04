"use client";
import { PrimaryBtn } from "@/hoc/CustomButton/Buttons";
import { FormInput } from "@/hoc/Input/input.component";
import DropdownList from "@/hoc/dropDown/drop.down";
import { addDoc, collection } from "firebase/firestore";
import { initFlowbite } from "flowbite";

import { useRouter } from "next/navigation";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { db } from "../../../config/firebase.config";

const data = [
    {
        name: "offer",
        type: [true, false],
    },
];
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
    });
    const [validationErrors, setValidationErrors] = useState({});

    const fileInputRef:MutableRefObject<any> = useRef(null);
    useEffect(() => {
        initFlowbite();

    }, []);
    const route = useRouter();
    const handleChange = (e: any) => {
        const { name, value } = e.target;
      
        
        setAddDataForm({ ...addDataForm, [name]: value });
       
    };
    const handleSubmit = async (e: any) => {
        const docRef = await addDoc(collection(db, "posts"), addDataForm).then(
            () => { }
        );
    };
    const handleFileUpload = () => {
        // Click the hidden file input to trigger the file selection dialog
        fileInputRef.current.click();
    };

    const handleFileChange = (e: any) => {
        const file = e.target.files[0];
        const imageUrl = URL.createObjectURL(file);

        if (file) {
            // Handle the uploaded file here (e.g., upload to a server or save it)
            console.log('Uploaded file:', file);
          setAddDataForm({...addDataForm, image:imageUrl})
        }
    };

    return (
        <div className="flex flex-col items-center gap-4 mt-3 p-12">
            <FormInput
                name="tag"
                type="text"
                onChange={(e: any) => handleChange(e)}
                placeholder="Enter Tag"
                value={addDataForm.tag}
                className="w-[60%] bg-silver"
            />
            {/* {validationErrors.tag && <div className="error">{validationErrors.tag}</div>} */}
            {/* */}
            <div className="h-[4.042253521126761vh] w-full border-2 border-grey-700 rounded-sm  flex items-center pl-3 bg-silver" onClick={handleFileUpload}>
                <button >Upload File</button>
                <input
                    ref={fileInputRef}
                    type="file"
                    accept=".jpg, .png, .jpeg"
                    style={{ display: 'none' }} // Hide the file input
                    onChange={handleFileChange}
                />
            </div>

            {/* {validationErrors?.images && <div className="error">{validationErrors?.images}</div>} */}
            <FormInput
                name="title"
                type="text"
                onChange={(e: any) => handleChange(e)}
                placeholder="Enter title"
                value={addDataForm.title}
                className="w-[60%] bg-silver"
            />
            <FormInput
                name="time"
                type="text"
                onChange={(e: any) => handleChange(e)}
                placeholder="Enter Time"
                value={addDataForm.time}
                className="w-[60%] bg-silver"
            />
            <FormInput
                name="price"
                type="text"
                onChange={(e: any) => handleChange(e)}
                placeholder="Enter product price"
                value={addDataForm.price}
                className="w-[60%] bg-silver"
            />
            <div className="flex justify-around w-full">
                <DropdownList data={data} setAddDataForm={setAddDataForm} />
                <FormInput
                    name="offerPrice"
                    type="text"
                    onChange={(e: any) => handleChange(e)}
                    placeholder="Enter offer price "
                    value={addDataForm.offerPrice}
                    className="w-[13%] sm:w-[20%]"
                />
            </div>
            <FormInput
                name="instituteName"
                type="text"
                onChange={(e: any) => handleChange(e)}
                placeholder="Enter instituteName name "
                value={addDataForm.instituteName}
                className="w-[60%] bg-silver"
            />
            <FormInput
                name="rating"
                type="text"
                onChange={(e: any) => handleChange(e)}
                placeholder="Enter Product overal rating"
                value={addDataForm.rating}
                className="w-[60%] bg-silver"
            />
            <FormInput
                name="ratingCount"
                type="text"
                onChange={(e: any) => handleChange(e)}
                placeholder="Enter Rating Count"
                value={addDataForm.ratingCount}
                className="w-[60%] bg-silver"
            />
            <FormInput
                name="primaryAction"
                type="text"
                onChange={(e: any) => handleChange(e)}
                placeholder="Enter Button Name "
                value={addDataForm.primaryAction}
                className="w-[60%] bg-silver"
            />
            <FormInput
                name="buttonType"
                type="text"
                onChange={(e: any) => handleChange(e)}
                placeholder="Enter Button Type "
                value={addDataForm.buttonType}
                className="w-[60%] bg-silver"
            />
            <FormInput
                name="ctaLabel"
                type="text"
                onChange={(e: any) => handleChange(e)}
                placeholder="Enter link name "
                value={addDataForm.ctaLabel}
                className="w-[60%] bg-silver"
            />
            <FormInput
                name="added"
                type="text"
                onChange={(e: any) => handleChange(e)}
                placeholder="Enter added url"
                value={addDataForm.added}
                className="w-[60%] bg-silver"
            />
            <PrimaryBtn onClick={(e: any) => handleSubmit(e)}>
                {" "}
                Add To Database
            </PrimaryBtn>
        </div>
    );
};

export default AddCourse;
