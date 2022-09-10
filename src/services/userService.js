import instance from "../axiosInstance";

export async function getAllUsers(pageNo) {
    return instance.get("/int/users", {
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

export async function updateUserAuth(userId, data) {
    const path = "/int/users/" + userId + "/auth";
    return instance.patch(path, data).then(
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
