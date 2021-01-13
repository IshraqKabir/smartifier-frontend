import Axios from "axios";

export default async function get(url, token = "") {

    let config = {
        method: 'get',
        url: url,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}` 
        },
    };

    return Axios(config)
}