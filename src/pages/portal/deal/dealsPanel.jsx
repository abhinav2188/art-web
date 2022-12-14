import React, { useEffect, useState } from "react";
import Sections from "../../../components/Sections";
import { getAllDeals } from "../../../services/dealService";
import AddDeal from "./AddDeal";
import DealHistory from "./DealHistory";
import UpdateDeal from "./UpdateDeal";
import ViewDeals from "./ViewDeals";

const DealsPanel = (props) => {

    const [pageNo, setPageNo] = useState(0);
    const [dealsData, setDealsData] = useState({
        "totalCount": 0,
        "totalPages": 0,
        "deals": []
    });

    function addDealToView(deal) {
        setDealsData(prevState => ({
            ...prevState,
            deals: [
                deal,
                ...prevState.deals
            ]
        }));
    }

    const [currentDealId, setCurrentDealId] = useState(null);

    const [section, setSection] = useState("View Deals");

    const dealSections = [
        {
            name: "View Deals",
            component: <ViewDeals data={dealsData} setData={setDealsData} pageNo={pageNo} setPageNo={setPageNo} setCurrentDealId={setCurrentDealId} setSection={setSection} />
        },
        {
            name: "Add Deal",
            component: <AddDeal addDealToView={addDealToView} />
        },
        {
            name: "Update Deal",
            component: <UpdateDeal dealId={currentDealId} />
        },
        {
            name: "Deal History",
            component: <DealHistory dealId={currentDealId} />
        }
    ]

    return (
        <Sections section={section} setSection={setSection} sections={dealSections} />
    );
}

export default DealsPanel;