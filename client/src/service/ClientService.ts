import axios from "axios";

export interface Client {
  id: string;
  name: string;
}

export default {
  getClients(): Promise<Client[]> {
    return axios
      .get("http://localhost:8080/clients")
      .then((res) => res.data)
      .then((data) =>
        data.map((client) => {
          return { id: client._id, name: client.name };
        })
      );
  },
};
