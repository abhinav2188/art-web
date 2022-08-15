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
            <div>
                <ActionButton onClick={() => {
                    setCurrentDealId(deal.dealId);
                    setSection("updateDeal");
                }}>Update</ActionButton>
            </div>
        );
    }
    return (
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
        // <div>
        //     <p>Total Deals: {props.data.totalCount}</p>
        //     <PageButton pageNo={props.pageNo} setPageNo={props.setPageNo} totalPagesCount={props.data.totalPages} />
        //     <table>
        //         <thead>
        //             <tr className="bg-gray-600 text-white">
        //                 {
        //                     viewFields.map((viewField) =>
        //                         <td key={viewField.label}>{viewField.display}</td>
        //                     )
        //                 }
        //                 <td>Actions</td>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {
        //                 props.data.deals.map(
        //                     (deal, i) =>
        //                         <tr key={i}>
        //                             {
        //                                 viewFields.map(viewField =>
        //                                     <td>{String(deal[viewField.field])}</td>)
        //                             }
        //                             <td>
        //                                 <ActionButton onClick={() => {
        //                                     props.setCurrentDealId(deal.dealId);
        //                                     props.setSection("updateDeal");
        //                                 }}>Update</ActionButton>
        //                             </td>
        //                         </tr>
        //                 )
        //             }
        //         </tbody>
        //     </table>
        // </div>
    );
}

export default ViewDeals;