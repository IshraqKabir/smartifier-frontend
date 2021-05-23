import axios from "axios";

export default async function verifyEmail(
  email: string,
  password: string,
  code: string
) {
  const response = await axios
    .post(`/api/auth/verify-email`, {
      email,
      password,
      code,
    })
    .then((response) => {
      return response.data;
    });

  return response;
}
