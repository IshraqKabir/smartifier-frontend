import axios from "axios"
import { backend_url } from "../../../url"

export default async (email, password) => {
    const user = await axios
        .post(`${backend_url}/api/auth/email-signin`, {
            email, password
        })
        .then(response => {
            return { success: true, response: response.data, error: null };
        }).catch(err => {
            return { success: false, response: null, error: err }
        })

    return user;
}