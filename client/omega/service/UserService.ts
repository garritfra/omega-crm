import axios from "axios";

const basepath = process.env.API_BASE_PATH;

export interface User {
  id: String;
  fullName: String;
  email: String;
}

export default {
  async getUser(): Promise<User> {
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

  async login(email: String, password: String): Promise<String> {
    const response = await axios.post(basepath + "/auth/login", {
      email,
      password,
    });
    const token = response.data.token;
    document.cookie = "token=" + token;
    return token;
  },

  async register(
    email: string,
    password: string,
    fullName: string
  ): Promise<User> {
    const response = await axios.post(basepath + "/auth/register", {
      email,
      password,
      full_name: fullName,
    });

    const user = response.data;
    return { id: user._id, fullName: user.full_name, email: user.email };
  },
  getToken(): string | undefined {
    const cookie = document.cookie
      .split(";")
      .filter((cookie) => cookie.startsWith("token="))[0];
    const token = cookie ? cookie.replace("token=", "") : undefined;
    return token;
  },
};
