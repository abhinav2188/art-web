import React, { useEffect, useState } from "react";
import Form from "../../../components/Form";
import { putDealSection2 } from "../../../services/dealService";
import { getDropdownValues } from "../../../services/dropdownService";
import { handleFormDataChange } from "../../../utils/FormUtils";
import ViewDetails from "../../../components/ViewDetails";

const formName = "DEAL_PRODUCT_REQUIREMENTS";

const formFields = [
    {
        label: "Product Type",
        name: "productType",
        type: "dropdown",
        dropdownType: "PRODUCT_TYPE"
    },
    {
        label: "Sub-category Product",
        name: "subCategoryProduct",
        type: "dropdown",
        dropdownType: "SUB_CATEGORY_PRODUCT"
    },
    {
        label: "Unit of Quantity",
        name: "unitOfQuantity",
        type: "dropdown",
        dropdownType: "UNIT_OF_QUANTITY"
    },
    {
        label: "Order Size Factor",
        name: "orderSizeFactor",
        type: "number"
    },
    {
        label: "Type of Work",
        name: "typeOfWork",
        type: "dropdown",
        dropdownType: "TYPE_OF_WORK"
    },
    {
        label: "Road Details",
        name: "roadDetails",
        type: "textArea"
    },
]


const viewFields = [
    {
        label: "Product Type",
        name: "productType"
    },
    {
        label: "Sub-category Product",
        name: "subCategoryProduct"
    },
    {
        label: "Unit of Quantity",
        name: "unitOfQuantity"
    },
    {
        label: "Order Size Factor",
        name: "orderSizeFactor"
    },
    {
        label: "Type of Work",
        name: "typeOfWork"
    },
    {
        label: "Road Details",
        name: "roadDetails"
    },
]


const DealSection2 = ({ dealId, setDealDetails, data, edit }) => {
    const [formData, setFormData] = useState({
        productType: "",
        subCategoryProduct: "",
        unitOfQuantity: "",
        orderSizeFactor: "",
        typeOfWork: "",
        roadDetails: ""
    });

    const handleChange = (event) => {
        handleFormDataChange(event, setFormData);
    }

    const [dropdowns, setDropdowns] = useState({
        PRODUCT_TYPE: {
            values: []
        },
        SUB_CATEGORY_PRODUCT: {
            values: []
        },
        UNIT_OF_QUANTITY: {
            values: []
        },
        TYPE_OF_WORK: {
            values: []
        },
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
        putDealSection2(dealId, formData).then(
            response => {
                console.log(response);
                setLoading(false);
                setDealDetails(prevState => ({
                    ...prevState,
                    productDetails: formData
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
            <ViewDetails viewFields={viewFields} data={data} actions={actions} title="product details" />
    );

}

export default DealSection2;