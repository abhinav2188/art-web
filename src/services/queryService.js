import instance from "../axiosInstance";

export async function addDealQuery(dealId, data) {
    const path = "/deal-query/" + dealId;
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
