import React from "react";
import ActionButton from "../../../components/button/ActionButton";
import PageButton from "../../../components/button/PageButton";
import Table from "../../../components/Table";

const viewFields = [
    {
        name: "id",
        label: "Id"
    },
    {
        name: "partyName",
        label: "Party Name",
    },
    {
        name: "address",
        label: "Address",
    },
    {
        name: "authority",
        label: "Authority",
    },
    {
        name: "email",
        label: "Email",
    },
    {
        name: "mobile",
        label: "Mobile",
    },
    {
        name: "isActive",
        label: "Active",
    }
]


const ViewParty = ({ data, pageNo, setPageNo, setCurrentParty, setSection }) => {

    const entryActions = (party) => <div>
        <ActionButton onClick={() => {
            setCurrentParty(party);
            setSection("update");
        }}>Update</ActionButton>
    </div>

    return (
        <Table viewFields={viewFields}
            entriesList={data.partyList}
            totalPages={data.totalPagesCount}
            totalEntries={data.totalCount}
            pageNo={pageNo}
            setPageNo={setPageNo}
            title="Party"
            entryActions={entryActions}
        />
    );
}

export default ViewParty;