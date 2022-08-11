import React, { useEffect, useState } from "react";
import DealSection1 from "./DealSection1";
import DealSection3 from "./DealSection3";
import DealSection2 from "./DealSection2";
import DealSection4 from "./DealSection4";
import DealContacts from "../deal-contacts/DealContacts";
import DealOwners from "./DealOwners";
import DealConsultants from "../deal-consultants/DealConsultants";

const AddDeal = (props) => {

    const [dealId, setDealId] = useState(null);

    const [dealDetails, setDealDetails] = useState({
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
    });

    // const [activeSection, setActiveSection] = useState(0);

    // const nextSection = () => {
    //     setActiveSection(prevActive => prevActive+1);
    // } 

    // const formSections = [
    //     <CreateDeal setDealId={setDealId} />,
    // ]

    return (
        <div className="flex flex-col gap-8 p-8">
            <DealSection1 setDealId={setDealId} setDealDetails={setDealDetails} data={dealDetails.cardDetails} edit />
            {
                dealId &&
                <div>
                    <DealSection2 dealId={dealId} setDealDetails={setDealDetails} data={dealDetails.productDetails} edit />
                    <DealSection3 dealId={dealId} setDealDetails={setDealDetails} data={dealDetails.commonDetails} edit />
                    <DealSection4 dealId={dealId} setDealDetails={setDealDetails} data={dealDetails.additionalDetails} edit />
                    <DealOwners dealId={dealId} setDealDetails={setDealDetails} data={dealDetails.authorizationDetails} />
                    <DealContacts dealId={dealId} />
                    <DealConsultants dealId={dealId} />
                </div>
            }
        </div>
    );
}

export default AddDeal;