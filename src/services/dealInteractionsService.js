import instance from "../axiosInstance";

export async function addDealInteraction(dealId, data) {
    const path = "/ext/interactions/" + dealId;
    return instance.post(path, data).then(
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

export async function getAllDealInteractions(dealId, pageNo) {
    const path = "/ext/interactions/" + dealId;
    return instance.get(path, {
        params: {
            pageNo
        }
    }).then(
        response => {
            return response.data;
        }
    )
        .catch(error => {
            alert(error.response.data.status + ", " + error.response.data.responseMsg);
            return null;
        })
}

export async function deleteDealInteraction(interactionId) {
    const path = "/ext/interactions/" + interactionId;
    return instance.delete(path)
        .then(
            response => {
                return response.data;
            }
        )
        .catch(error => {
            alert(error.response.data.status + ", " + error.response.data.responseMsg);
            return null;
        })
}

