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

    const tableActions = <div className="flex">
        <ActionButton type="add" onClick={() => setViewAddForm(true)} />
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
            <ActionButton type="delete" loading={loading} onClick={() => deleteContact(contactId)} />
        );
    }


    const entryActions = (contact) => <div className="flex">
        <DeleteContactButton contactId={contact.id} />
    </div>

    return (
        <div className="flex flex-col gap-8">
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
