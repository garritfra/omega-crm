import axios from "axios";

export interface User {
  id: String;
  fullName: String;
  email: String;
}

export default {
  async getUser(): Promise<User> {
    const response = await axios.get("http://localhost:8080/auth/profile", {
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
    const response = await axios.post("http://localhost:8080/auth/login", {
      email,
      password,
    });
    const token = response.data.token;
    document.cookie = token;
    return token;
  },
};
