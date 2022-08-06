import React, { useEffect, useState } from "react";
import SubmitButton from "../../components/button/SubmitButton";
import BoolSelectInput from "../../components/input/BoolSelectInput";
import SelectInput from "../../components/input/SelectInput";
import TextInput from "../../components/input/TextInput";
import { getDropdownValues } from "../../services/dropdownService";
import { updateParty } from "../../services/partyService";
import { handleFormDataChange } from "../../utils/FormUtils";

const UpdateParty = (props) => {

    const [formData, setFormData] = useState(props.formData);

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

    function submitUpdatePartyForm() {
        setLoading(true);
        console.log("submitting update party:", formData);
        updateParty(props.formData.id, formData).then(response => {
            console.log(response);
            if (response) {
                props.updatePartyToView(response.data);
            }
            setLoading(false);
        })
    }

    return (
        props.formData ?
            <div>
                <form>
                    <TextInput name="partyName" label="Party Name" value={formData.partyName} onChange={handleChange} />
                    <TextInput name="address" label="Address" value={formData.address} onChange={handleChange} />
                    <SelectInput name="authority" label="Authority" value={formData.authority} onChange={handleChange} optionsList={dropdowns.AUTHORITY_TYPE.values} />
                    <TextInput name="email" label="Email" value={formData.email} onChange={handleChange} />
                    <TextInput name="mobile" label="Mobile" value={formData.mobile} onChange={handleChange} />
                    <BoolSelectInput name="isActive" label="Active" value={formData.isActive} onChange={handleChange} />
                    <SubmitButton onClick={submitUpdatePartyForm} loading={loading} />
                </form>
            </div> :
            <p>No party selected! Select party from view section.</p>
    );
}

export default UpdateParty;