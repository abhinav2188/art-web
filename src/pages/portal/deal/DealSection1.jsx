import React, { useEffect, useState } from "react";
import { postDeal } from "../../../services/dealService";
import SubmitButton from "../../../components/button/SubmitButton";
import SelectInput from "../../../components/input/SelectInput";
import TextInput from "../../../components/input/TextInput";
import { getDropdownValues } from "../../../services/dropdownService";
import { handleFormDataChange } from "../../../utils/FormUtils";
import ViewDetails from "../../../components/ViewDetails";
import Form from "../../../components/Form";

const formName = "PARTY_DEAL";

const formFields = [
    {
        label: "Party Name",
        name: "partyName",
        type: "dropdown",
        dropdownType: "PARTY"
    },
    {
        label: "Deal Name",
        name: "dealName",
        type: "text"
    }
]

const viewFields = [
    {
        label: "Party Name",
        name: "partyName",
    },
    {
        label: "Deal Name",
        name: "dealName",
    }
]

const initialData = {
    partyName: "",
    dealName: ""
};

const DealSection1 = ({ setDealId, setDealDetails, data, edit }) => {


    const [formData, setFormData] = useState(initialData);

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
    }, []);

    let [loading, setLoading] = useState(false);

    let [editMode, setEditMode] = useState(edit);

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
        })
    }

    return (

        editMode ?
            <Form
                title="Deal"
                fields={formFields}
                formData={formData}
                setFormData={setFormData}
                dropdowns={dropdowns}
                onSubmit={submitAddDealForm}
                loading={loading} />
            :
            <ViewDetails viewFields={viewFields} title="Deal" data={data} />
    );
}

export default DealSection1;