import axios from "axios";

const basepath = process.env.API_BASE_PATH;

export interface Client {
  id: string;
  name: string;
}

export interface NewClient {
  name: string;
}

export default {
  getClients(): Promise<Client[]> {
    return axios
      .get(basepath + "/clients")
      .then((res) => res.data)
      .then((data) =>
        data.map((client) => {
          return { id: client._id, name: client.name };
        })
      );
  },

  addClient(client: NewClient): Promise<Client> {
    return axios
      .post(basepath + "/clients", client)
      .then((res) => res.data)
      .then((client) => {
        return { ...client, id: client._id };
      })
      .then((data) => data as Client);
  },
};
