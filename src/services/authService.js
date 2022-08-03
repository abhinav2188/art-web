import axios from "axios";

const API_URL = "http://localhost:8080/api/auth"


async function loginUser(email, password) {
    console.log("login(" + email + "," + password + ')');
    const path = API_URL + "/login";
    return axios.post(path, {
        email,
        password
    })
        .then(response => {
            console.log(response.data);
            if (response.data.data != null) {
                alert(response.data.responseMsg);
                sessionStorage.setItem("userDetails", JSON.stringify(response.data.data));
            }
            return true;
        })
        .catch(errorResp => {
            console.log(errorResp.response.data);
            alert(errorResp.response.data.responseMsg);
            return false;
        })
}

export { loginUser };