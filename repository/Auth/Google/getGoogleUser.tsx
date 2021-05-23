import axios from "axios";

export default async function getGoogleUser(code) {
  const response = await axios
    .get(`/api/auth/google?get=user&code=${code}`)
    .then((response) => {
      return response.data;
    });

  return response;
}
