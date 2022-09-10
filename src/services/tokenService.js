import instance from "../axiosInstance";

export async function validateToken() {

    const path = "/token";

    return instance.get(path).then(
        response => {
            if (response.data) {
                return response.data;
            }
            else return null;
        }
    ).catch(error => {
        console.error(error);
        return false;
    })

}
