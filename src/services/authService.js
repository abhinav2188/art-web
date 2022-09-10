import instance from "../axiosInstance";

async function loginUser(email, password) {
  const path = "/auth/login";

  return instance
    .post(path, {
      email,
      password,
    })
    .then((response) => {
      if (response.data.data != null) {
        return response.data.data;
      }
      return false;
    })
    .catch((errorResp) => {
      alert(errorResp.response.data.responseMsg);
      return false;
    });
}

async function registerUser(email, password, mobile) {
  const path = "/auth/register";
  return instance
    .post(path, {
      email,
      password,
      mobile,
    })
    .then((response) => {
      if (response.data.data != null) {
        alert(response.data.responseMsg);
      }
      return true;
    })
    .catch((errorResp) => {
      alert(errorResp.response.data.responseMsg);
      return false;
    });
}

export { loginUser, registerUser };
