import instance from "../axiosInstance";

export async function addBrochure(data) {
  const path = "/int/brochures";
  return instance
    .post(path, data)
    .then((response) => {
      alert(response.data.responseMsg);
      return response.data;
    })
    .catch((error) => {
      alert(
        error.response.data.status + ", " + error.response.data.responseMsg
      );
      return null;
    });
}

export async function getAllBrochures(pageNo) {
  console.log("getAllBrochures()");
  return instance
    .get("/int/brochures/all", {
      params: {
        pageNo,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      alert(
        error.response.data.status + ", " + error.response.data.responseMsg
      );
      return null;
    });
}
