const router = require("express").Router();

const Client = require("../model/Client");
const User = require("../model/User");

router.get("/", async (req, res) => {
  const client = await Client.find();
  res.json(client);
});

router.post("/", async (req, res) => {
  console.log("POSTing client");
  const { name, created_by } = req.body;

  const client = new Client({ name, created_by });
  await client
    .save()
    .then(async (client) => {
      const user = await User.findById(created_by);
      user.clients.push(client.id);
      user.save();
      return client;
    })
    .then((client) => {
      res.json(client);
    })
    .catch((err) => res.status(400).send(err));
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  const result = await Client.findById(id);
  res.send(result);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const result = await Client.deleteOne({ _id: id });
  res.send(result);
});

module.exports = router;
