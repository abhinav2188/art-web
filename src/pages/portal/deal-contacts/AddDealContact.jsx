import React, { useEffect, useState } from "react";
import Form from "../../../components/Form";
import { addDealContact } from "../../../services/contactService";
import { getDropdownValues } from "../../../services/dropdownService";
import { handleFormDataChange } from "../../../utils/FormUtils";

const formName = "DEAL_CONTACTS";

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
        dropdownType: "CONTACT_DESIGNATION"
    }
]

const initialData = {
    name: "",
    email: "",
    mobile: "",
    designation: ""
};

const AddDealContact = ({ dealId, addContactToView, setDisplay }) => {
    const [formData, setFormData] = useState(initialData);

    const [dropdowns, setDropdowns] = useState({
        CONTACT_DESIGNATION: {
            values: []
        }
    });


    const [flag, setFlag] = useState(true);

    const reloadDropdown = () => setFlag(f => !f);

    useEffect(() => {
        getDropdownValues(null, formName, dealId).then(
            response => {
                if (response) {
                    console.log(response.dropdownKeyDetailsMap);
                    setDropdowns(response.dropdownKeyDetailsMap)
                }
            }
        )
    }, [flag])

    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {
        setLoading(true);
        addDealContact(dealId, formData).then(
            response => {
                console.log("handlesubmit", response);
                if (response) {
                    addContactToView(response.data);
                }
                setFormData(initialData);
                setDisplay(false);
                setLoading(false);
            }
        )
    }

    return (
        <Form
            title="ADD Deal-Contact"
            fields={formFields}
            formData={formData}
            dropdowns={dropdowns}
            setFormData={setFormData}
            onSubmit={handleSubmit}
            loading={loading}
            reloadDropdown={reloadDropdown}
        />
    );

}

export default AddDealContact;