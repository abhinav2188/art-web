
import React, { useEffect, useState } from "react";
import ActionButton from "../../../components/button/ActionButton";
import Table from "../../../components/Table";
import { getAllBrochures } from "../../../services/brochureService";
import AddBrochure from "./AddBrochure";

const viewFields = [
    {
        label: "Brochure Name",
        name: "brochureName"
    },
    {
        label: "File URL",
        name: "filePath",
    },
    {
        label: "Active",
        name: "isActive"
    },
]

const Brochures = () => {

    const [data, setData] = useState({
        totalCount: 0,
        totalPageCount: 0,
        brochures: []
    });

    const [pageNo, setPageNo] = useState(0);

    useEffect(() => {
        getAllBrochures(pageNo).then(response => {
            if (response) {
                setData(response.data);
            }
        })
    }, [pageNo])

    function addBrochureToView(brochure) {
        setData(prevState => ({
            ...prevState,
            brochures: [
                brochure,
                ...prevState.brochures
            ]
        }));
    }

    const [viewAddForm, setViewAddForm] = useState(false);

    const tableActions = <div>
        <button className="bg-green-600 px-1" onClick={() => setViewAddForm(true)} >add brochure</button>
    </div>


    return (
        <div>
            <Table
                viewFields={viewFields}
                pageNo={pageNo}
                setPageNo={setPageNo}
                totalEntries={data.totalCount}
                totalPages={data.totalPageCount}
                entriesList={data.brochures}
                title="Brochures"
                tableActions={tableActions}
            />
            {viewAddForm && <AddBrochure addBrochureToView={addBrochureToView} display={viewAddForm} setDisplay={setViewAddForm} />}
        </div>
    );


}

export default Brochures;
