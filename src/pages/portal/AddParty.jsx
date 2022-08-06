import React, { useEffect, useState } from "react";
import SubmitButton from "../../components/button/SubmitButton";
import SelectInput from "../../components/input/SelectInput";
import TextInput from "../../components/input/TextInput";
import { getDropdownValues } from "../../services/dropdownService";
import { postParty } from "../../services/partyService";
import { handleFormDataChange } from "../../utils/FormUtils";

const AddParty = (props) => {

    const [formData, setFormData] = useState({
        partyName: "",
        address: "",
        authority: "",
        mobile: "",
        email: ""
    });

    const [dropdowns, setDropdowns] = useState({
        AUTHORITY_TYPE: {
            values: []
        }
    });

    useEffect(() => {
        getDropdownValues(null, "PARTY_DETAILS", null).then(
            response => {
                if (response) {
                    console.log(response.dropdownKeyDetailsMap);
                    setDropdowns(response.dropdownKeyDetailsMap)
                }
            }
        )
    }, [])

    let [loading, setLoading] = useState(false);

    function handleChange(event) {
        handleFormDataChange(event, setFormData);
    }

    function submitAddPartyForm() {
        setLoading(true);
        postParty(formData).then(response => {
            console.log(response);
            if (response) {
                props.addPartyToView(response.data);
            }
            setLoading(false);
            setFormData({
                partyName: "",
                address: "",
                authority: null,
                mobile: "",
                email: ""
            })
        })
    }

    return (
        <div>
            <form>
                <TextInput name="partyName" label="Party Name" value={formData.partyName} onChange={handleChange} />
                <TextInput name="address" label="Address" value={formData.address} onChange={handleChange} />
                <SelectInput name="authority" label="Authority" value={formData.authority} onChange={handleChange} optionsList={dropdowns.AUTHORITY_TYPE.values} />
                <TextInput name="email" label="Email" value={formData.email} onChange={handleChange} />
                <TextInput name="mobile" label="Mobile" value={formData.mobile} onChange={handleChange} />
                <SubmitButton onClick={submitAddPartyForm} loading={loading} />
            </form>
        </div>
    );
}

export default AddParty;