import React, { useState } from "react";
import { getDeal } from "../../../services/dealService";
import DealContacts from "../deal-contacts/DealContacts";
import DealSection2 from "./DealSection2";
import DealSection1 from "./DealSection1";
import DealSection3 from "./DealSection3";
import DealSection4 from "./DealSection4";


const initialData = {
    cardDetails: {
        createTimestamp: "",
        updateTimestamp: "",
        dealId: "",
        dealName: "",
        partyName: "",
        partyId: "",
        dealStage: "",
        openingDate: "",
        isActive: ""
    },
    productDetails: {
        productType: "",
        subCategoryProduct: "",
        unitOfQuantity: "",
        orderSizeFactor: "",
        typeOfWork: "",
        roadDetails: ""
    },
    commonDetails: {
        siteLocation: "",
        cateredByVertical: "",
        paymentType: "",
        openingDate: "",
        expectedCloseDate: "",
        actualCloseDate: "",
        expectedNumberOfDays: "",
        expectedDeliveryAddress: "",
        lastPurchaseDetails: "",
        competitorsInfo: "",
        remarks: ""
    },
    additionalDetails: {
        dealStage: "",
        isActive: "",
        dealValueInCr: "",
        paymentTerms: "",
        paymentFactor: "",
        ownerFocus: "",
        dealProbability: "",
        expectedTurnover: "",
        proximityFromBase: ""
    },
    authorizationDetails: {
        owner: "",
        coOwners: [
        ]
    }
};

const UpdateDeal = ({ dealId }) => {

    const [dealDetails, setDealDetails] = useState(initialData);

    useState(() => {
        if (!dealId) return;
        getDeal(dealId).then(
            response => {
                if (response) {
                    setDealDetails(response.data);
                }
            }
        )
    }, [dealId])

    return (
        dealId ?
            <div className="flex flex-col gap-8 p-8">
                <DealSection1 setDealDetails={setDealDetails} data={dealDetails.cardDetails} />
                <DealSection2 dealId={dealId} setDealDetails={setDealDetails} data={dealDetails.productDetails} />
                <DealSection3 dealId={dealId} setDealDetails={setDealDetails} data={dealDetails.commonDetails} />
                <DealSection4 dealId={dealId} setDealDetails={setDealDetails} data={dealDetails.additionalDetails} />
                <DealContacts dealId={dealId} />
            </div> :
            <p>Select a deal from view section</p>
    );
}

export default UpdateDeal;