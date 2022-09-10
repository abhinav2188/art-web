import instance from "../axiosInstance";

export async function getDealsExcel() {

    return instance.get("/int/download/db", {
        responseType: 'blob'
    }).then(
        response => {
            return response.data;
        }
    )
        .catch(error => {
            alert(error.response.status + ", " + error.response.data.responseMsg);
            return null;
        })
} 