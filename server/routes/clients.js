const router = require("express").Router();

const Client = require("../model/Client");
const User = require("../model/User");

router.get("/", async (req, res) => {
  const client = await Client.find({ created_by: req.userId });
  res.json(client);
});

router.post("/", async (req, res) => {
  const clientParams = req.body;

  const created_by = await User.findOne({ _id: req.userId });

  const client = new Client({ ...clientParams, created_by });
  await client
    .save()
    .then((client) => {
      res.json(client);
    })
    .catch((err) => res.status(400).send(err));
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  const client = await Client.findOne({ _id: id, created_by: req.userId });
  res.send(client);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const result = await Client.deleteOne({ _id: id, created_by: req.userId });
  res.send(result);
});

module.exports = router;
