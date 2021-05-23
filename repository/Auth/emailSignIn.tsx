import axios from "axios";

export default async function emailSignin(email: string, password: string) {
  const response = await axios
    .post(`/api/auth/email-signin`, {
      email,
      password,
    })
    .then((response) => {
      return response.data;
    });

  return response;
}
