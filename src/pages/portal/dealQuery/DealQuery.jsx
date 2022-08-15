import React, { useState } from "react";
import AddDealQuery from "./AddDealQuery";

const DealQuery = ({ dealId }) => {

    const [viewAddForm, setViewAddForm] = useState(true);

    return (
        viewAddForm ?
            <AddDealQuery setDisplay={setViewAddForm} dealId={dealId} /> :
            <p>
                <button className="bg-yellow-600 p-1 rounded" onClick={() => setViewAddForm(true)}>Send Query</button>
            </p>
    );

}

export default DealQuery;