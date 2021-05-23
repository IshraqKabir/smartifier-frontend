import axios from "axios";

export default async function emailSignup(data) {
  const response = await axios
    .post(`/api/auth/email-signup`, data)
    .then((response) => {
      return response.data;
    });

  return response;
}
