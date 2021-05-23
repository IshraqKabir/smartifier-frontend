import axios from "axios";
import googleConfig from "../../../pages/api/config/google";

export default async (code) => {
    const data = await axios
        .post(`https://oauth2.googleapis.com/token`, {
            code: code,
            client_id: googleConfig.clientId,
            client_secret: googleConfig.clientSecret,
            redirect_uri: googleConfig.redirect,
            grant_type: "authorization_code",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        })
        .then((res) => res.data)
        .catch((err) => err);

    // const auth = createConnection();
    // const data = await auth.getToken(code);
    return { data };
}