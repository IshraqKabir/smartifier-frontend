import axios from "axios"
import { backend_url } from "../../../url"

export default async (data) => {
    const user = await axios
        .post(`${backend_url}/api/auth/email-signup`, data)
        .then(response => {
            return { success: true, response: response.data, error: null };
        }).catch(err => {
            console.log(err)
            return { success: false, response: null, error: err }
        })

    return user;
}