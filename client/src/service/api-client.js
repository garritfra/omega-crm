/* Custom axios instance that adds the token to the headers, if existent */
import axios from "axios"

axios.interceptors.request.use(function (config) {
    const token = document.cookie.split(";").filter(cookie => cookie.startsWith("token="))[0].replace("token=", "");
    if (document.cookie) {
        config.headers.Authorization = "Bearer " + token;
    }
    return config;
});

export default axios;