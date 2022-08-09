import React, { useEffect, useState } from "react";
import Sections from "../../components/Sections";
import { getAllDeals } from "../../services/dealService";
import AddDeal from "./deal/AddDeal";
import UpdateDeal from "./deal/UpdateDeal";
import ViewDeals from "./deal/ViewDeals";

const DealsPanel = (props) => {

    const [pageNo, setPageNo] = useState(0);
    const [dealsData, setDealsData] = useState({
        "totalCount": 0,
        "totalPages": 0,
        "deals": []
    });

    useEffect(() => {
        getAllDeals(pageNo).then(response => {
            if (response) {
                setDealsData(response);
            }
        })
    }, [pageNo])

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

    const [section, setSection] = useState("addDeal");

    const dealSections = [
        {
            name: "addDeal",
            component: <AddDeal addDealToView={addDealToView} />
        },
        {
            name: "viewDeals",
            component: <ViewDeals data={dealsData} pageNo={pageNo} setPageNo={setPageNo} setCurrentDealId={setCurrentDealId} setSection={setSection} />
        },
        {
            name: "updateDeal",
            component: <UpdateDeal dealId={currentDealId} />
        }
    ]

    return (
        <Sections section={section} setSection={setSection} sections={dealSections} />
    );
}

export default DealsPanel;