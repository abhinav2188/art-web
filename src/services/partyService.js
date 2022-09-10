import instance from "../axiosInstance";

export async function getAllParty(pageNo) {
    return instance.get("/int/party/all", {
        params: {
            pageNo
        }
    }).then(
        response => {
            return response.data.data;
        }
    )
        .catch(error => {
            alert(error.response.data.status + ", " + error.response.data.responseMsg);
            return null;
        })
}

export async function postParty(data) {
    const path = "/ext/party";
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

export async function updateParty(id, data) {
    const path = "/int/party/" + id;
    return instance.put(path, data).then(
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
