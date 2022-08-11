import React, { useState } from "react";
import { addDealOwner, postDeal, removeDealOwner } from "../../../services/dealService";
import { handleFormDataChange } from "../../../utils/FormUtils";
import ActionButton from "../../../components/button/ActionButton";
import Form from "../../../components/Form";

const DealOwners = ({ dealId, setDealDetails, data }) => {

    const [formData, setFormData] = useState({
        email: ""
    });

    const formFields = [
        {
            name: "email",
            label: "User Email",
            type: "text"
        }
    ]

    let [addProgress, setAddProgress] = useState(false);

    function addOwner() {
        setAddProgress(true);
        addDealOwner(dealId, formData).then(response => {
            console.log(response);
            if (response) {
                setDealDetails(prevState => ({
                    ...prevState,
                    authorizationDetails: {
                        ...prevState.authorizationDetails,
                        coOwners: [
                            ...prevState.authorizationDetails.coOwners,
                            response.data
                        ]
                    }
                }))
            }
            setAddProgress(false);
        })
    }

    const RemoveOwnerButton = ({ owner }) => {
        let [removeProgress, setRemoveProgress] = useState(false);
        function removeOwner() {
            setRemoveProgress(true);
            removeDealOwner(dealId, owner).then(response => {
                console.log(response);
                if (response) {
                    setDealDetails(prevState => ({
                        ...prevState,
                        authorizationDetails: {
                            ...prevState.authorizationDetails,
                            coOwners: prevState.authorizationDetails.coOwners.filter(co => co.id != response.data.id)
                        }
                    }))
                }
                setRemoveProgress(false);
            })
        }
        return (
            <ActionButton loading={removeProgress} onClick={removeOwner}>X</ActionButton>
        );
    }

    const [viewAdd, setViewAdd] = useState(false);

    return (
        <div className="flex flex-col">
            <div className="flex justify-between">
                <p>Deal Owners</p>
                <ActionButton onClick={() => setViewAdd(prevState => !prevState)}>Add</ActionButton>
            </div>
            <div className="flex flex-wrap">
                {
                    data.coOwners.map(owner =>
                        <div className="border rounded-full px-1">
                            <span>{owner.email}</span>
                            <RemoveOwnerButton owner={owner} />
                        </div>
                    )
                }
            </div>
            {
                viewAdd &&
                <Form
                    fields={formFields}
                    formData={formData}
                    setFormData={setFormData}
                    onSubmit={addOwner}
                    loading={addProgress} />
            }
        </div>

    );
}

export default DealOwners;