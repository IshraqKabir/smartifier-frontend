import axios from "axios";

export default async function sendPasswordResetmail(email: string) {
  const response = await axios
    .post(`/api/auth/send-password-reset-mail`, {
      email,
    })
    .then((response) => {
      return response.data;
    });

  return response;
}
