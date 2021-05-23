import axios from "axios";

export default async function googleSignup(data) {
  const response = await axios
    .post(`/api/auth/google-signup`, data)
    .then((response) => {
      return response.data;
    });

  return response;
}
