/* Custom axios instance that adds the token to the headers, if existent */
const axios = require("axios");
const UserService = require("./UserService");

axios.interceptors.request.use(function (config) {
  const token = UserService.getToken();

  if (token) {
    config.headers.Authorization = "Bearer " + token;
  }
  return config;
});

export default axios;
