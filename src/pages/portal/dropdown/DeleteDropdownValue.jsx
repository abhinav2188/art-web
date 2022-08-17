import React, { useState } from "react";
import ActionButton from "../../../components/button/ActionButton";
import { deleteDropdownValue } from "../../../services/dropdownService";

const DeleteDropdownValue = ({ dropdownId, removeFromView }) => {

    const [valueDeleteProgress, setValueDeleteProgress] = useState(false);

    function deleteValue() {
        setValueDeleteProgress(true);
        deleteDropdownValue(dropdownId).then(
            response => {
                console.log(response);
                removeFromView(response);
                setValueDeleteProgress(false);
            }
        )
    }

    return (
        <ActionButton type="delete" loading={valueDeleteProgress} onClick={deleteValue} />
    );
}

export default DeleteDropdownValue;