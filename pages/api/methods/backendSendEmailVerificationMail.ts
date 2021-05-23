import axios from "axios"
import { backend_url } from "../../../url"

export default async (email: string, password: string) => {
    const user = await axios
        .post(`${backend_url}/api/auth/send-email-verification-mail`, {
            email, password
        })
        .then(response => {
            return { success: true, response: response.data, error: null };
        }).catch(err => {
            return { success: false, response: null, error: err }
        })

    return user;
}