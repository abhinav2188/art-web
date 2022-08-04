import axios from "axios";

const API_URL = "http://localhost:8080/api"

export async function getAllUsers(pageNo) {
    console.log("getAllUsers()");
    return axios.get(API_URL + "/int/users", {
        params: {
            pageNo
        }
    }).then(
        response => {
            console.log("response data:", response.data);
            return response.data.data;
        }
    )
        .catch(error => {
            console.log("error:", error);
            console.log(error.response.data);
            alert(error.response.data.status + ", " + error.response.data.responseMsg);
            return null;
        })
}

export async function updateUserAuth(userId, data) {
    console.log("getAllUsers()");
    const path = API_URL + "/int/users/" + userId + "/auth";
    return axios.patch(path, data).then(
        response => {
            console.log("response data:", response.data);
            alert(response.data.responseMsg);
            return response.data;
        }
    )
        .catch(error => {
            console.log("error:", error);
            console.log(error.response.data);
            alert(error.response.data.status + ", " + error.response.data.responseMsg);
            return null;
        })
}
