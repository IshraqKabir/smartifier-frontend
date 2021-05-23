import axios from "axios";

export default async function resetPassword(
  email: string,
  code: string,
  password: string,
  confirmPassword: string
) {
  const response = await axios
    .post(`/api/auth/reset-password`, {
      email,
      code,
      password,
      confirmPassword,
    })
    .then((response) => {
      return response.data;
    });

  return response;
}
