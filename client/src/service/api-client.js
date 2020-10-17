/* Custom axios instance that adds the token to the headers, if existent */
import axios from "axios";
import UserManager from "./UserService";

axios.interceptors.request.use(function (config) {
  const token = UserManager.getToken();

  if (token) {
    config.headers.Authorization = "Bearer " + token;
  }
  return config;
});

export default axios;
