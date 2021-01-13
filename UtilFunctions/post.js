import Axios from "axios";

export default async function post(url, data, callBack, errorCallBack, token, isMultipart = false) {

    var config = {
        method: 'post',
        url,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        data,
    };

    if (isMultipart) {
        config = {
            ...config,
            'Content-Type': 'multipart/form-data'
        }
    }

    Axios(config)
        .then(response => {
            callBack(response)
        })
        .catch(error => {
            errorCallBack(error)
        })
}