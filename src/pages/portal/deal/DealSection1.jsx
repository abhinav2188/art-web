import React, { useEffect, useState } from "react";
import { postDeal } from "../../../services/dealService";
import SubmitButton from "../../../components/button/SubmitButton";
import SelectInput from "../../../components/input/SelectInput";
import TextInput from "../../../components/input/TextInput";
import { getDropdownValues } from "../../../services/dropdownService";
import { handleFormDataChange } from "../../../utils/FormUtils";
import ViewDetails from "../../../components/ViewDetails";

const DealSection1 = ({ setDealId, setDealDetails, data, edit }) => {

    const formName = "PARTY_DEAL";

    const [formData, setFormData] = useState({
        partyName: "",
        dealName: ""
    });

    const [dropdowns, setDropdowns] = useState({
        PARTY: {
            values: []
        }
    });

    useEffect(() => {
        getDropdownValues(null, formName, null).then(
            response => {
                if (response) {
                    console.log(response.dropdownKeyDetailsMap);
                    setDropdowns(response.dropdownKeyDetailsMap)
                }
            }
        )
    }, [])

    let [loading, setLoading] = useState(false);

    let [editMode, setEditMode] = useState(edit);

    function handleChange(event) {
        handleFormDataChange(event, setFormData);
    }

    function submitAddDealForm() {
        setLoading(true);
        postDeal(formData).then(response => {
            console.log(response);
            if (response) {
                setDealDetails(prevState => ({
                    ...prevState,
                    cardDetails: response.data
                }))
            }
            setLoading(false);
            setDealId(response.data.dealId);
            setEditMode(false);
            // setFormData({
            //     partyName: "",
            //     dealName: ""
            // })
        })
    }

    const viewFields = [
        {
            label: "Deal Name",
            name: "dealName"
        },
        {
            label: "Party Name",
            name: "partyName"
        },
    ]

    return (

        editMode ?
            <form>
                <SelectInput name="partyName" label="Party" value={formData.partyName} onChange={handleChange} optionsList={dropdowns.PARTY.values} />
                <TextInput name="dealName" label="Deal Name" value={formData.dealName} onChange={handleChange} />
                <SubmitButton onClick={submitAddDealForm} loading={loading} />
            </form> :
            <ViewDetails viewFields={viewFields} title="Deal" data={data} />
    );
}

export default DealSection1;