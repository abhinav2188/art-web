import instance from "../axiosInstance";

export async function addDealConsultant(dealId, data) {
    const path = "/ext/consultants/" + dealId;
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

export async function getAllDealConsultants(dealId, pageNo) {
    const path = "/ext/consultants/" + dealId;
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

export async function deleteDealConsultant(consultantId) {
    const path = "/ext/consultants/" + consultantId;
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

