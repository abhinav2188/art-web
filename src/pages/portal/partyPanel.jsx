import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { getAllParty } from "../../services/partyService";
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
    const [section, setSection] = useState("view");

    useEffect(() => {
        getAllParty(pageNo).then(
            response => {
                if (response) {
                    console.log(response);
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

    const [currentParty, setCurrentParty] = useState(null);

    const sections = [{
        name: "add",
        component: <AddParty addPartyToView={addPartyToView} />
    }, {
        name: "view",
        component: <ViewParty pageNo={pageNo} setPageNo={setPageNo} data={partyData} setData={setPartyData} setCurrentParty={setCurrentParty} setSection={setSection} />
    }, {
        name: "update",
        component: <UpdateParty updatePartyToView={updatePartyToView} formData={currentParty} />
    }];

    function isSectionAction(name) {
        return section == name;
    }

    return (
        <div>
            <nav className="shadow-sm w-full flex items-center gap-4 px-16">
                <NavLink to="">
                    <span>Party Panel</span>
                </NavLink>
                <div className="flex items-center gap-4">
                    {
                        sections.map((sec, i) =>
                            <button className={`${isSectionAction(sec.name) ? "bg-gray-200" : ""}`} onClick={() => setSection(sec.name)} key={i}>{sec.name}</button>
                        )
                    }
                </div>
            </nav>
            <div>
                {
                    sections.filter(section => isSectionAction(section.name)).map(section =>
                        section.component)
                }
            </div>
        </div>
    );
}

export default PartyPanel;