import React from "react";
import ActionButton from "../../components/button/ActionButton";
import PageButton from "../../components/button/PageButton";

const ViewParty = (props) => {
    return (
        <div>
            <p>Total Users : {props.data.totalCount}</p>
            <PageButton pageNo={props.pageNo} setPageNo={props.setPageNo} totalPagesCount={props.data.totalPagesCount} />
            <table>
                <thead>
                    <tr className="bg-gray-600 text-white">
                        <td>Id</td>
                        <td>Party Name</td>
                        <td>Authority</td>
                        <td>Address</td>
                        <td>Mobile</td>
                        <td>Email</td>
                        <td>Active</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.partyList.map(
                            (party, i) =>
                                <tr key={i}>
                                    <td>{party.id}</td>
                                    <td>{party.partyName}</td>
                                    <td>{party.authority}</td>
                                    <td>{party.address}</td>
                                    <td>{party.mobile}</td>
                                    <td>{party.email}</td>
                                    <td>{party.isActive ? "active" : "blocked"}</td>
                                    <td>
                                        <ActionButton onClick={() => {
                                            props.setCurrentParty(party);
                                            props.setSection("update");
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

export default ViewParty;