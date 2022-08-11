import React, { useEffect, useState } from "react";
import Form from "../../../components/Form";
import { addDealConsultant } from "../../../services/consultantService";
import { getDropdownValues } from "../../../services/dropdownService";
import { handleFormDataChange } from "../../../utils/FormUtils";

const formName = "DEAL_CONSULTANTS";

const formFields = [
    {
        label: "Full Name",
        name: "name",
        type: "text"
    },
    {
        label: "Email",
        name: "email",
        type: "text"
    },
    {
        label: "Mobile",
        name: "mobile",
        type: "text"
    },
    {
        label: "Designation",
        name: "designation",
        type: "dropdown",
        dropdownType: "CONSULTANT_DESIGNATION"
    }
]

const initialData = {
    name: "",
    email: "",
    mobile: "",
    designation: ""
};

const AddDealConsultant = ({ dealId, addConsultantToView, setDisplay }) => {

    const [formData, setFormData] = useState(initialData);

    const [dropdowns, setDropdowns] = useState({
        CONSULTANT_DESIGNATION: {
            values: []
        }
    });

    useEffect(() => {
        getDropdownValues(null, formName, dealId).then(
            response => {
                if (response) {
                    console.log(response.dropdownKeyDetailsMap);
                    setDropdowns(response.dropdownKeyDetailsMap)
                }
            }
        )
    }, [])

    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {
        setLoading(true);
        addDealConsultant(dealId, formData).then(
            response => {
                console.log("handlesubmit", response);
                if (response) {
                    addConsultantToView(response.data);
                }
                setFormData(initialData);
                setDisplay(false);
                setLoading(false);
            }
        )
    }

    // let [editMode, setEditMode] = useState(true);

    // const actions = <div>
    //     <button className="bg-green-500 rounded-full px-1" onClick={() => setEditMode(true)}>Edit</button>
    // </div>

    return (
        <Form
            fields={formFields}
            formData={formData}
            dropdowns={dropdowns}
            setFormData={setFormData}
            onSubmit={handleSubmit}
            loading={loading} />
    );

}

export default AddDealConsultant;