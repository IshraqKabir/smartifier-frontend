import axios from "axios"
import { backend_url } from "../../../url"

export default async (email: string, password: string, code: string) => {
    const user = await axios
        .post(`${backend_url}/api/auth/verify-email`, {
            email, password, code
        })
        .then(response => {
            return { success: true, response: response.data, error: null };
        }).catch(err => {
            return { success: false, response: null, error: err }
        })

    return user;
}