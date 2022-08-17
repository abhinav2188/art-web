import React from "react";
import ActionButton from "../../../components/button/ActionButton";
import PageButton from "../../../components/button/PageButton";
import Table from "../../../components/Table";

const viewFields = [
    {
        label: "Id",
        name: "dealId"
    },
    {
        label: "Deal Name",
        name: "dealName"
    },
    {
        label: "Party Name",
        name: "partyName"
    },
    {
        label: "Deal Stage",
        name: "dealStage"
    },
    {
        label: "Opening Date",
        name: "openingDate"
    },
    {
        label: "Active",
        name: "isActive"
    },
]


const ViewDeals = ({ pageNo, setPageNo, data, setSection, setCurrentDealId }) => {
    const entryActions = (deal) => {
        return (
            <div className="flex">
                <ActionButton onClick={() => {
                    setCurrentDealId(deal.dealId);
                    setSection("updateDeal");
                }} type="edit">Update</ActionButton>
            </div>
        );
    }
    return (
        <div className="flex flex-col w-full py-8">
            <Table
                viewFields={viewFields}
                pageNo={pageNo}
                setPageNo={setPageNo}
                totalEntries={data.totalCount}
                totalPages={data.totalPages}
                entriesList={data.deals}
                title="Deals"
                entryActions={entryActions}
            />
        </div>
    );
}

export default ViewDeals;