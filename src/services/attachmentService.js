import instance from "../axiosInstance";

export async function addDealAttachment(dealId, formData) {
    const path = "/ext/" + dealId + "/docs";
    return instance.post(path, formData).then(
        response => {
            alert(response.data.responseMsg);
            return response.data;
        }
    )
        .catch(error => {
            alert(error.response.data.status + ", " + error.response.data.responseMsg);
            return null;
        })
}


export async function getAllDealAttachments(dealId) {
    const path = "/ext/" + dealId + "/docs";
    return instance.get(path).then(
        response => {
            return response.data;
        }
    )
        .catch(error => {
            alert(error.response.data.status + ", " + error.response.data.responseMsg);
            return null;
        })
}

export async function deleteDealAttachment(dealId, docId) {
    const path = "/ext/" + dealId + "/docs";
    return instance.delete(path, {
        params: {
            docId
        }
    }).then(
        response => {
            alert(response.data.responseMsg);
            return response.data;
        }
    )
        .catch(error => {
            alert(error.status + ", " + error.response.data.responseMsg);
            return null;
        })
}
