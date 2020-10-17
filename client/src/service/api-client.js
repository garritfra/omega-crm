/* Custom axios instance that adds the token to the headers, if existent */
import axios from "axios"

axios.interceptors.request.use(function (config) {
    const cookie = document.cookie.split(";")
        .filter(cookie => cookie.startsWith("token="))[0]
    const token = cookie ?
        cookie.replace("token=", "") : undefined

    if (token) {
        config.headers.Authorization = "Bearer " + token;
    }
    return config;
});

export default axios;