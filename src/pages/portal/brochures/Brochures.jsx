import React, { useEffect, useState } from "react";
import SubmitButton from "../../../components/button/SubmitButton";
import Form from "../../../components/Form";
import FileInput from "../../../components/input/FileInput";
import TextInput from "../../../components/input/TextInput";
import { addBrochure } from "../../../services/brochureService";

const formFields = [
    {
        label: "File",
        name: "file",
        type: "file"
    },
    {
        label: "Brochure Name",
        name: "brochureName",
        type: "text"
    }
]

const initialData = {
    file: "",
    brochureName: "",
};

const AddBrochure = ({ addBrochureToView, setDisplay }) => {

    const [formData, setFormData] = useState(initialData);

    const [loading, setLoading] = useState(false);

    const handleSubmit = (event) => {
        // event.preventDefault();
        const formDataa = new FormData();
        formDataa.append("file", formData.file);
        formDataa.append("brochureName", formData.brochureName);
        setLoading(true);
        addBrochure(formDataa).then(
            response => {
                console.log("handlesubmit", response);
                if (response) {
                    // addBrochureToView(response.data);
                }
                setFormData(initialData);
                // setDisplay(false);
                setLoading(false);
            }
        )
    }

    function handleChange(e) {
        let name = e.target.name;
        let value = name == "file" ? e.target.files[0] : e.target.value;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    // let [editMode, setEditMode] = useState(true);

    // const actions = <div>
    //     <button className="bg-green-500 rounded-full px-1" onClick={() => setEditMode(true)}>Edit</button>
    // </div>

    return (

        <Form
            fields={formFields}
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
            loading={loading}
            multipart
        />

        // <form encType="multipart/form-data">
        //     <input type="file" name="file" onChange={handleChange} />
        //     <TextInput label="Brochure Name" name="brochureName" onChange={handleChange} />
        //     <SubmitButton onClick={handleSubmit} loading={loading} />
        // </form>
    );

}

export default AddBrochure;