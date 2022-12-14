import React, { useState } from "react";
import ActionButton from "../../../components/button/ActionButton";
import { deleteDealAttachment } from "../../../services/attachmentService";

const DeleteAttachment = ({ dealId, attachment, removeAttachmentFromView }) => {

    let [removeProgress, setRemoveProgress] = useState(false);

    function deleteAttachemnt() {
        if (!window.confirm("Confirm to Delete!")) return;
        setRemoveProgress(true);
        deleteDealAttachment(dealId, attachment.id).then(response => {
            if (response) {
                removeAttachmentFromView(attachment.id);
            }
            setRemoveProgress(false);
        })
    }

    return (
        <ActionButton loading={removeProgress} onClick={deleteAttachemnt} type="delete" />
    );
}

export default DeleteAttachment;
