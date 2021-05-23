import axios from "axios";

export default async function sendEmailVerificationMail(
  email: string,
  password: string
) {
  const response = await axios
    .post(`/api/auth/send-email-verification-mail`, {
      email,
      password,
    })
    .then((response) => {
      return response.data;
    });

  return response;
}
