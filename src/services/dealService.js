import instance from "../axiosInstance";
// import axios from "axios";

export async function postDeal(data) {
    const path = "/ext/deals";
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

export async function getAllDeals(pageNo, searchParams) {
    return instance.get("/ext/deals/all", {
        params: {
            pageNo,
            ...searchParams
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

export async function putDealSection2(dealId, data) {
    const path = "/ext/deals/" + dealId + "/s2";
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

export async function putDealSection3(dealId, data) {
    const path = "/ext/deals/" + dealId + "/s3";
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

export async function putDealSection4(dealId, data) {
    const path = "/ext/deals/" + dealId + "/s4";
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

export async function getDeal(dealId) {
    const path = "/int/deals/" + dealId;
    return instance.get(path).then(
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


export async function addDealOwner(dealId, data) {
    const path = "/int/deals/" + dealId + "/add-auth";
    return instance.patch(path, data).then(
        response => {
            alert(response.data.responseMsg);
            return response.data;
        }
        )
        .catch(error => {
            alert(error.status + ", " + error.response.data.responseMsg);
            return null;
        })
}

export async function removeDealOwner(dealId, data) {
    const path = "/int/deals/" + dealId + "/remove-auth";
    return instance.patch(path, data).then(
        response => {
            alert(response.data.responseMsg);
            return response.data;
        }
    )
        .catch(error => {
            alert(error.status + ", " + error.response.data.responseMsg);
            return null;
        })
}
