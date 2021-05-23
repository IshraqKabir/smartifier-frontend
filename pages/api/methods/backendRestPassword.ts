import axios from "axios"
import { backend_url } from "../../../url"

export default async (email: string, code: string, password: string, confirmPassword: string) => {
    const user = await axios
        .post(`${backend_url}/api/auth/reset-password`, {
            email, code, new_password: password, confirm_password: confirmPassword
        })
        .then(response => {
            return { success: true, response: response.data, error: null };
        }).catch(err => {
            return { success: false, response: null, error: err }
        })

    return user;
}