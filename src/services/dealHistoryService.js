import instance from "../axiosInstance";

export async function getDealHistory(dealId, pageNo) {
    const path = "/int/" + dealId + "/history";
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
