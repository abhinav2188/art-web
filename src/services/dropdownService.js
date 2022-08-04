import axios from "axios";

const API_URL = "http://localhost:8080/api"

export async function getDropdownKeys() {
    console.log("getDropdownKeys()");
    return axios.get(API_URL + "/int/dropdown/keys")
        .then(
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

export async function getDropdownValues(dropdownType, formType, dealId) {
    console.log("getDropdownValues()");
    return axios.get(API_URL + "/ext/dropdown", {
        params: {
            dropdownType, formType, dealId
        }
    })
        .then(
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

export async function postDropdownValue(data) {
    console.log("getDropdownValues()");
    return axios.post(API_URL + "/int/dropdown", data)
        .then(
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

export async function deleteDropdownValue(valueId) {
    console.log("getDropdownValues()");
    return axios.delete(API_URL + "/int/dropdown/value", {
        params: {
            valueId
        }
    })
        .then(
            response => {
                console.log("response data:", response.data);
                return response.data.data;
            }
        )
        .catch(error => {
            console.log("error:", error);
            console.log(error.response.data);
            // alert(error.response.data.status + ", " + error.response.data.responseMsg);
            return null;
        })
}
