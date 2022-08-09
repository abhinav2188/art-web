import React from "react";
import ActionButton from "../../../components/button/ActionButton";
import PageButton from "../../../components/button/PageButton";

const viewFields = [
    {
        display: "Id",
        field: "dealId"
    },
    {
        display: "Deal Name",
        field: "dealName"
    },
    {
        display: "Party Name",
        field: "partyName"
    },
    {
        display: "Deal Stage",
        field: "dealStage"
    },
    {
        display: "Opening Date",
        field: "openingDate"
    },
    {
        display: "Active",
        field: "isActive"
    },
]

const ViewDeals = (props) => {
    return (
        <div>
            <p>Total Deals: {props.data.totalCount}</p>
            <PageButton pageNo={props.pageNo} setPageNo={props.setPageNo} totalPagesCount={props.data.totalPages} />
            <table>
                <thead>
                    <tr className="bg-gray-600 text-white">
                        {
                            viewFields.map((viewField) =>
                                <td key={viewField.display}>{viewField.display}</td>
                            )
                        }
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.deals.map(
                            (deal, i) =>
                                <tr key={i}>
                                    {
                                        viewFields.map(viewField =>
                                            <td>{String(deal[viewField.field])}</td>)
                                    }
                                    <td>
                                        <ActionButton onClick={() => {
                                            props.setCurrentDealId(deal.dealId);
                                            props.setSection("updateDeal");
                                        }}>Update</ActionButton>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ViewDeals;