import axios from "axios";

const API_URL = "http://localhost:8080/api/auth"


async function loginUser(email, password) {

    console.log("login(" + email + ')');
    const path = API_URL + "/login";

    return axios.post(path, {
        email,
        password,
    })
        .then(response => {
            console.log(response.data);
            if (response.data.data != null) {
                return response.data.data;
            }
            return false;
        })
        .catch(errorResp => {
            console.log(errorResp.response.data);
            alert(errorResp.response.data.responseMsg);
            return false;
        })
}

async function registerUser(email, password, mobile) {
    console.log("register(" + email + ')');
    const path = API_URL + "/register";
    return axios.post(path, {
        email,
        password,
        mobile
    })
        .then(response => {
            console.log(response.data);
            if (response.data.data != null) {
                alert(response.data.responseMsg);
            }
            return true;
        })
        .catch(errorResp => {
            console.log(errorResp.response.data);
            alert(errorResp.response.data.responseMsg);
            return false;
        })
}


export { loginUser, registerUser };