import axios from "axios";

export default async function getGoogleIdToken(code: any) {
  const id_token: any = await axios
    .get(`/api/auth/google?get=user&code=${code}`)
    .then((response) => {
      return response?.data?.user?.data?.id_token;
    })
    .catch((err) => {
      console.log("error in get google id token " + err);
    });

  return id_token;
}
