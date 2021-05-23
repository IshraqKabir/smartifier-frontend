import axios from "axios";

export default async function googleSignin(id_token: string) {
  const response = await axios
    .post(`/api/auth/google-signin`, {
      id_token,
    })
    .then((response) => {
      return response.data;
    });

  return response;
}
