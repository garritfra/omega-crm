const router = require("express").Router();

const Client = require("../model/Client");
const User = require("../model/User");

router.get("/", async (req, res) => {
  const client = await Client.find({ created_by: req.userId }).map(
    (clients) => {
      return clients.map((client) => {
        const status = client.events.filter(
          (event) => event.eventType == "status_changed"
        )[0];
        if (status) return { ...client.toJSON(), status: status.value };
        else return { ...client.toJSON(), status: "" };
      });
    }
  );
  res.json(client);
});

router.post("/", async (req, res) => {
  const params = req.body;

  const created_by = await User.findOne({ _id: req.userId });

  const { status, ...clientParams } = params;

  const client = new Client({ ...clientParams, created_by });
  client.set({ status });

  client.events.push({
    eventType: "created",
    created_at: new Date(),
  });

  if (status) {
    client.events.push({
      eventType: "status_changed",
      value: status,
      created_at: new Date(),
    });
  }

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
  const status = client.events.filter(
    (event) => event.eventType == "status_changed"
  )[0];

  if (status) res.json({ ...client.toJSON(), status: status.value });
  else {
    res.json({ ...client.toJSON(), status: "" });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const result = await Client.deleteOne({ _id: id, created_by: req.userId });
  res.send(result);
});

module.exports = router;
