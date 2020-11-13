const axios = require("axios");

const basepath = process.env.API_BASE_PATH;

module.exports = {
  async getUser() {
    console.debug("Getting user");
    const response = await axios.get(basepath + "/auth/profile", {
      headers: { Authorization: "Bearer " + document.cookie },
    });
    const data = response.data;

    return {
      id: data._id,
      fullName: data.full_name,
      email: data.email,
    };
  },

  async login(email, password) {
    const response = await axios.post(basepath + "/auth/login", {
      email,
      password,
    });
    const token = response.data.token;
    document.cookie = "token=" + token;
    return token;
  },

  async register(email, password, fullName) {
    const response = await axios.post(basepath + "/auth/register", {
      email,
      password,
      full_name: fullName,
    });

    const user = response.data;
    return { id: user._id, fullName: user.full_name, email: user.email };
  },
};
