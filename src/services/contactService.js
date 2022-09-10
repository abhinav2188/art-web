import instance from "../axiosInstance";

export async function addDealContact(dealId, data) {
    const path = "/ext/contacts/" + dealId;
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

export async function getAllDealContacts(dealId, pageNo) {
    const path = "/ext/contacts/" + dealId;
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

export async function deleteDealContact(contactId) {
    const path = "/ext/contacts/" + contactId;
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

export async function getAllContacts(pageNo) {
    const path = "/int/contacts";
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

