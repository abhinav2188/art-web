import instance from "../axiosInstance";

const API_URL = "http://localhost:8080/api"

export async function getDropdownKeys() {
    return instance.get("/int/dropdown/keys")
    .then(
        response => {
                return response.data.data;
            }
        )
        .catch(error => {
            alert(error.response.data.status + ", " + error.response.data.responseMsg);
            return null;
        })
}

export async function getDropdownValues(dropdownType, formType, dealId) {
    return instance.get("/ext/dropdown", {
        params: {
            dropdownType, formType, dealId
        }
    })
        .then(
            response => {
                return response.data.data;
            }
        )
        .catch(error => {
            alert(error.response.data.status + ", " + error.response.data.responseMsg);
            return null;
        })
}

export async function postDropdownValue(data) {
    return instance.post("/int/dropdown", data)
        .then(
            response => {
                return response.data.data;
            }
        )
        .catch(error => {
            alert(error.response.data.status + ", " + error.response.data.responseMsg);
            return null;
        })
}

export async function deleteDropdownValue(valueId) {
    return instance.delete("/int/dropdown/value", {
        params: {
            valueId
        }
    })
        .then(
            response => {
                return response.data.data;
            }
        )
        .catch(error => {
            alert(error.response.data.status + ", " + error.response.data.responseMsg);
            return null;
        })
}
