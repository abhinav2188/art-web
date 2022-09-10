import React, { useEffect, useState } from "react";
import Form from "../../../components/Form";
import { getDropdownValues } from "../../../services/dropdownService";
import { updateParty } from "../../../services/partyService";

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
    },
    {
        name: "isActive",
        label: "Active",
        type: "boolean"
    }
]

const UpdateParty = (props) => {

    const [formData, setFormData] = useState(props.formData);

    useEffect(() => {
        setFormData(props.formData)
    }, [props.formData])

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
        updateParty(props.formData.id, formData).then(response => {
            if (response) {
                props.updatePartyToView(response.data);
            }
            setLoading(false);
        })
    }


    return (

        <div className="py-8">
            {
                props.formData ?
                    <Form
                        title="UPDATE Party Details"
                        fields={formFields}
                        formData={formData}
                        setFormData={setFormData}
                        dropdowns={dropdowns}
                        onSubmit={handleSubmit}
                        loading={loading}
                    />
                    :
                    <p>No party selected! Select party from view section.</p>
            }
        </div>
    );
}

export default UpdateParty;