import React, { useEffect, useState } from "react";
import Form from "../../../components/Form";
import { putDealSection4 } from "../../../services/dealService";
import { getDropdownValues } from "../../../services/dropdownService";
import { handleFormDataChange } from "../../../utils/FormUtils";
import ViewDetails from "../../../components/ViewDetails";

const DealSection4 = ({ dealId, setDealDetails, data, edit }) => {

    const [formData, setFormData] = useState({
        dealStage: "",
        isActive: "",
        dealValueInCr: "",
        paymentTerms: "",
        paymentFactor: "",
        ownerFocus: "",
        dealProbability: "",
        expectedTurnover: "",
        proximityFromBase: ""
    });

    const formName = "DEAL_ADDITIONAL";

    const [dropdowns, setDropdowns] = useState({
        CURRENT_DEAL_STAGE: {
            values: []
        },
        PAYMENT_TERMS: {
            values: []
        }
    });

    const formFields = [
        {
            label: "Deal Stage",
            name: "dealStage",
            type: "dropdown",
            dropdownType: "CURRENT_DEAL_STAGE"
        },
        {
            label: "Active",
            name: "isActive",
            type: "boolean",
        },
        {
            label: "Deal Value in Cr",
            name: "dealValueInCr",
            type: "number",
        },
        {
            label: "Payment Terms",
            name: "paymentTerms",
            type: "dropdown",
            dropdownType: "PAYMENT_TERMS"
        },
        {
            label: "Payment Factor",
            name: "paymentFactor",
            type: "number"
        },
        {
            label: "Owner Focus",
            name: "ownerFocus",
            type: "number"
        },
        {
            label: "Deal Probability",
            name: "dealProbability",
            type: "number"
        },
        {
            label: "Expected Turnover",
            name: "expectedTurnover",
            type: "number"
        },
        {
            label: "Proximity From Base",
            name: "proximityFromBase",
            type: "text"
        },
    ]

    const viewFields = [
        {
            label: "Deal Stage",
            name: "dealStage",
        },
        {
            label: "Active",
            name: "isActive",
        },
        {
            label: "Deal Value in Cr",
            name: "dealValueInCr",
        },
        {
            label: "Payment Terms",
            name: "paymentTerms",
        },
        {
            label: "Payment Factor",
            name: "paymentFactor",
        },
        {
            label: "Owner Focus",
            name: "ownerFocus",
        },
        {
            label: "Deal Probability",
            name: "dealProbability",
        },
        {
            label: "Expected Turnover",
            name: "expectedTurnover",
        },
        {
            label: "Proximity From Base",
            name: "proximityFromBase",
        },
    ]

    const handleChange = (event) => {
        handleFormDataChange(event, setFormData);
    }

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

    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {
        setLoading(true);
        putDealSection4(dealId, formData).then(
            response => {
                console.log(response);
                setLoading(false);
                setDealDetails(prevState => ({
                    ...prevState,
                    additionalDetails: formData
                }));
                setEditMode(false);
            }
        )
    }

    let [editMode, setEditMode] = useState(edit);

    const actions = <div>
        <button className="bg-green-500 rounded-full px-1" onClick={() => setEditMode(true)}>Edit</button>
    </div>

    return (
        editMode ?
            <Form fields={formFields} formData={formData} dropdowns={dropdowns} handleChange={handleChange} onSubmit={handleSubmit} loading={loading} />
            :
            <ViewDetails viewFields={viewFields} data={data} actions={actions} title="additional details" />
    );

}

export default DealSection4;