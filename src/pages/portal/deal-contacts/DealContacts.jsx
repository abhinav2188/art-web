import React, { useEffect, useState } from "react";
import ActionButton from "../../../components/button/ActionButton";
import Table from "../../../components/Table";
import { deleteDealContact, getAllDealContacts } from "../../../services/contactService";
import AddDealContact from "./AddDealContact";

const viewFields = [
    {
        label: "Contact Id",
        name: "id"
    },
    {
        label: "Full Name",
        name: "name",
    },
    {
        label: "Email",
        name: "email",
    },
    {
        label: "Mobile",
        name: "mobile",
    },
    {
        label: "Designation",
        name: "designation",
    }
]

const DealContacts = ({ dealId, add }) => {

    const [data, setData] = useState({
        totalCount: 0,
        totalPageCount: 0,
        contacts: []
    });
    const [pageNo, setPageNo] = useState(0);

    useEffect(() => {
        getAllDealContacts(dealId, pageNo).then(response => {
            if (response) {
                setData(response.data);
            }
        })
    }, [pageNo])

    function addContactToView(contact) {
        setData(prevState => ({
            ...prevState,
            contacts: [
                contact,
                ...prevState.contacts
            ]
        }));
    }


    const [viewAddForm, setViewAddForm] = useState(add);

    const tableActions = <div>
        <button className="bg-green-600 px-1" onClick={() => setViewAddForm(true)} >add contact</button>
    </div>

    const DeleteContactButton = ({ contactId }) => {
        const [loading, setLoading] = useState(false);

        function deleteContact(contactId) {
            setLoading(true);
            deleteDealContact(contactId).then(
                response => {
                    if (response) {
                        setData(prevData => ({
                            ...prevData,
                            contacts: prevData.contacts.filter(contact => contact.id != contactId)
                        }))
                    }
                    setLoading(false);
                }
            )
        }

        return (
            <ActionButton loading={loading} onClick={() => deleteContact(contactId)}>Delete</ActionButton>
        );
    }


    const entryActions = (contactId) => <div>
        <DeleteContactButton contactId={contactId} />
    </div>

    return (
        <div>
            <Table
                viewFields={viewFields}
                pageNo={pageNo}
                setPageNo={setPageNo}
                totalEntries={data.totalCount}
                totalPages={data.totalPageCount}
                entriesList={data.contacts}
                title="Deal Contacts"
                tableActions={tableActions}
                entryActions={entryActions}
            />
            {viewAddForm && <AddDealContact dealId={dealId} addContactToView={addContactToView} display={viewAddForm} setDisplay={setViewAddForm} />}
        </div>
    );


}

export default DealContacts;
