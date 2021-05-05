import axios from "axios";

export default async function getUserDataFromGoogle(id_token: any) {
  const user: any = await axios
    .get(`https://oauth2.googleapis.com/tokeninfo?id_token=${id_token}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("error in get user data from google " + err);
    });

  return {
    email: user?.email,
    email_verified: user?.email_verified,
    at_hash: user?.at_hash,
    name: user?.name,
    picture: user?.picture,
  };
}
