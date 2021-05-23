import axios from "axios";

export default async function post(url, data, callBack, errorCallBack) {
  const user = getUser();

  const config = {
    method: "post",
    url,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${user.token}`,
    },
    data,
  };

  axios
    .post(`${url}`, data)
    .then((response) => callBack(response))
    .catch((error) => errorCallBack(erro));
}

function getUser() {
  const key = "user";
  const defaultValue = "";

  if (process.browser) {
    const storedValue = JSON.parse(localStorage.getItem(key));
    if (!storedValue) {
      return defaultValue;
    }
    return storedValue === null ? defaultValue : storedValue;
  } else {
    return defaultValue;
  }
}
