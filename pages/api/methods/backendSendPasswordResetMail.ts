import axios from "axios"
import { backend_url } from "../../../url"

export default async (email) => {
    const user = await axios
        .post(`${backend_url}/api/auth/send-password-reset-mail`, {
            email
        })
        .then(response => {
            return { success: true, response: response.data, error: null };
        }).catch(err => {
            return { success: false, response: null, error: err }
        })

    return user;
}