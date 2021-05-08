import axios from "axios";
import { local_backend_url } from "../../url";

export default async function backendSignIn({
  id_token,
  email,
  at_hash,
  email_verified,
  name,
  picture,
}) {
  const token: any = await axios
    .post(`${local_backend_url}/api/auth/googleSignIn`, {
      id_token: id_token,
      email: email,
      at_hash: at_hash,
      email_verified: email_verified === "true" ? true : false,
      name: name,
      picture: picture,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("error in backend sign in " + err);
    });

  return token;
}
