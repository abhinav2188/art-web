import React, { useEffect, useState } from "react";
import SubmitButton from "../../../components/button/SubmitButton";
import Form from "../../../components/Form";
import SelectInput from "../../../components/input/SelectInput";
import TextInput from "../../../components/input/TextInput";
import { getDropdownValues } from "../../../services/dropdownService";
import { postParty } from "../../../services/partyService";
import { handleFormDataChange } from "../../../utils/FormUtils";


const formFields = [
    {
        name: "partyName",
        label: "Party Name",
        type: "text"
    },
    {
        name: "address",
        label: "Address",
        type: "text"
    },
    {
        name: "authority",
        label: "Authority",
        type: "dropdown",
        dropdownType: "AUTHORITY_TYPE"
    },
    {
        name: "email",
        label: "Email",
        type: "text"
    },
    {
        name: "mobile",
        label: "Mobile",
        type: "text"
    }
]

const initialData = {
    partyName: "",
    address: "",
    authority: "",
    mobile: "",
    email: ""
}

const AddParty = ({ addPartyToView }) => {

    const [formData, setFormData] = useState(initialData);

    const [dropdowns, setDropdowns] = useState({
        AUTHORITY_TYPE: {
            values: []
        }
    });

    useEffect(() => {
        getDropdownValues(null, "PARTY_DETAILS", null).then(
            response => {
                if (response) {
                    setDropdowns(response.dropdownKeyDetailsMap)
                }
            }
        )
    }, [])

    let [loading, setLoading] = useState(false);

    function handleSubmit() {
        setLoading(true);
        postParty(formData).then(response => {
            console.log(response);
            if (!!response) {
                addPartyToView(response.data);
            }
            setLoading(false);
            setFormData(initialData);
        })
    }

    return (
        <Form
            fields={formFields}
            formData={formData}
            setFormData={setFormData}
            dropdowns={dropdowns}
            onSubmit={handleSubmit}
            loading={loading}
        />
    );
}

export default AddParty;