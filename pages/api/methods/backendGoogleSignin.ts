import axios from "axios"
import { backend_url } from "../../../url"

export default async (id_token) => {
    const user = await axios
        .post(`${backend_url}/api/auth/google-signin`, {
            id_token: id_token
        })
        .then(response => {
            return { success: true, response: response.data, error: null };
        }).catch(err => {
            return { success: false, response: null, error: err }
        })

    return user;
}