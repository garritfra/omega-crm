const axios = require("axios");

const basepath = process.env.API_BASE_PATH;

module.exports = {
  getClients() {
    return axios
      .get(basepath + "/clients")
      .then((res) => res.data)
      .then((data) =>
        data.map((client) => {
          return { id: client._id, name: client.name };
        })
      );
  },

  addClient(client) {
    return axios
      .post(basepath + "/clients", client)
      .then((res) => res.data)
      .then((client) => {
        return { ...client, id: client._id };
      });
  },

  getClientById(id) {
    return axios
      .get(basepath + "/clients/" + id)
      .then((res) => res.data)
      .then((client) => {
        return { ...client, id: client._id };
      });
  },

  updateStatus(id, status) {
    return axios.post(basepath + "/clients/" + id + "/events", {
      eventType: "status_changed",
      value: status,
    });
  },

  deleteMany(ids) {
    console.log("To delete:", ids);
    return axios({
      method: "delete",
      url: basepath + "/clients",
      data: ids,
    });
  },
};
