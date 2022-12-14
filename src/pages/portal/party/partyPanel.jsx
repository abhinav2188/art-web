import React, { useEffect, useState } from "react";
import Sections from "../../../components/Sections";
import { getAllParty } from "../../../services/partyService";
import AddParty from "./AddParty";
import UpdateParty from "./UpdateParty";
import ViewParty from "./ViewParty";

const PartyPanel = (props) => {

    const [partyData, setPartyData] = useState({
        totalCount: 0,
        totalPagesCount: 0,
        partyList: []
    });
    const [pageNo, setPageNo] = useState(0);
    const [currentParty, setCurrentParty] = useState(null);

    const [section, setSection] = useState("View Parties");

    useEffect(() => {
        getAllParty(pageNo).then(
            response => {
                if (response) {
                    setPartyData(response);
                }
            }
        )
    }, [pageNo])

    function addPartyToView(party) {
        setPartyData(prevState => ({
            ...prevState,
            partyList: [
                party,
                ...prevState.partyList
            ]
        }))
    }

    function updatePartyToView(party) {
        setPartyData(prevState => ({
            ...prevState,
            partyList: [
                party,
                ...prevState.partyList.filter(p => p.id != party.id)
            ]
        }));
        setCurrentParty(null);
    }

    const sections = [{
        name: "View Parties",
        component: <ViewParty pageNo={pageNo} setPageNo={setPageNo} data={partyData} setData={setPartyData} setCurrentParty={setCurrentParty} setSection={setSection} />
    }, {
        name: "Add Party",
        component: <AddParty addPartyToView={addPartyToView} />
    }, {
        name: "Update Party",
        component: <UpdateParty updatePartyToView={updatePartyToView} formData={currentParty} />
    }];

    return (
        <Sections sections={sections} section={section} setSection={setSection} />
    );
}

export default PartyPanel;