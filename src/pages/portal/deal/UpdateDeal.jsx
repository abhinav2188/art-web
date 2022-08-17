import React, { useState } from "react";
import { getDeal } from "../../../services/dealService";
import DealContacts from "../deal-contacts/DealContacts";
import DealSection2 from "./DealSection2";
import DealSection1 from "./DealSection1";
import DealSection3 from "./DealSection3";
import DealSection4 from "./DealSection4";
import DealOwners from "./DealOwners";
import DealConsultants from "../deal-consultants/DealConsultants";
import DealInteractions from "../deal-interactions/DealInteractions";
import DealQuery from "../dealQuery/DealQuery";


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
            <div className="flex flex-col gap-8 py-8">
                <DealSection1 setDealDetails={setDealDetails} data={dealDetails.cardDetails} />
                <DealQuery dealId={dealId} />
                <DealSection2 dealId={dealId} setDealDetails={setDealDetails} data={dealDetails.productDetails} />
                <DealSection3 dealId={dealId} setDealDetails={setDealDetails} data={dealDetails.commonDetails} />
                <DealSection4 dealId={dealId} setDealDetails={setDealDetails} data={dealDetails.additionalDetails} />
                <DealOwners dealId={dealId} setDealDetails={setDealDetails} data={dealDetails.authorizationDetails} />
                <DealContacts dealId={dealId} />
                <DealConsultants dealId={dealId} />
                <DealInteractions dealId={dealId} add />
            </div> :
            <p>Select a deal from view section</p>
    );
}

export default UpdateDeal;