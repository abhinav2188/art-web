import React, { useEffect, useState } from "react";
import Form from "../../../components/Form";
import ViewDetails from "../../../components/ViewDetails";
import { putDealSection3 } from "../../../services/dealService";
import { getDropdownValues } from "../../../services/dropdownService";
import { handleFormDataChange } from "../../../utils/FormUtils";


const DealSection3 = ({ dealId, setDealDetails, data, edit }) => {
    const [formData, setFormData] = useState({
        siteLocation: "",
        cateredByVertical: "",
        paymentType: "",
        openingDate: new Date(),
        expectedCloseDate: "",
        actualCloseDate: "",
        expectedNumberOfDays: "",
        expectedDeliveryAddress: "",
        lastPurchaseDetails: "",
        competitorsInfo: "",
        remarks: ""
    });

    const formFields = [
        {
            label: "Site Location",
            name: "siteLocation",
            type: "text"
        },
        {
            label: "Catered-by Vertical",
            name: "cateredByVertical",
            type: "dropdown",
            dropdownType: "VERTICAL"
        },
        {
            label: "Payment Type",
            name: "paymentType",
            type: "dropdown",
            dropdownType: "PAYMENT_TYPE"
        },
        {
            label: "Expected Close Date",
            name: "expectedCloseDate",
            type: "date"
        },
        {
            label: "Actual Close Date",
            name: "actualCloseDate",
            type: "date"
        },
        {
            label: "Expected Delivery Address",
            name: "expectedDeliveryAddress",
            type: "text"
        },
        {
            label: "Last Purchase Details",
            name: "lastPurchaseDetails",
            type: "textArea"
        },
        {
            label: "Competitors Info",
            name: "competitorsInfo",
            type: "textArea"
        },
        {
            label: "Remarks",
            name: "remarks",
            type: "textArea"
        },

    ]

    const viewFields = [
        {
            label: "Site Location",
            name: "siteLocation",
        },
        {
            label: "Catered-by Vertical",
            name: "cateredByVertical",
        },
        {
            label: "Payment Type",
            name: "paymentType",
        },
        {
            label: "Opening Date",
            name: "openingDate",
        },
        {
            label: "Expected Close Date",
            name: "expectedCloseDate",
        },
        {
            label: "Expected Number of Days",
            name: "expectedNumberOfDays",
        },
        {
            label: "Actual Close Date",
            name: "actualCloseDate",
        },
        {
            label: "Expected Delivery Address",
            name: "expectedDeliveryAddress",
        },
        {
            label: "Last Purchase Details",
            name: "lastPurchaseDetails",
        },
        {
            label: "Competitors Info",
            name: "competitorsInfo",
        },
        {
            label: "Remarks",
            name: "remarks",
        },

    ]

    const handleChange = (event) => {
        handleFormDataChange(event, setFormData);
        if (event.target.name == "expectedCloseDate") {
            let t1 = new Date(event.target.value).getTime();
            let t2 = new Date(formData.openingDate).getTime();
            const days = Math.ceil((t1 - t2) / (1000 * 3600 * 24));
            console.log(t1, t2, days);
            setFormData(prevState => ({
                ...prevState,
                expectedNumberOfDays: days
            }));
        }
    }

    const formName = "DEAL_DETAILS";

    const [dropdowns, setDropdowns] = useState({
        VERTICAL: {
            values: []
        },
        PAYMENT_TYPE: {
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

    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {
        setLoading(true);
        putDealSection3(dealId, formData).then(
            response => {
                console.log(response);
                setLoading(false);
                setDealDetails(prevState => ({
                    ...prevState,
                    commonDetails: formData
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
            <ViewDetails viewFields={viewFields} data={data} actions={actions} title="common details" />
    );

}

export default DealSection3;