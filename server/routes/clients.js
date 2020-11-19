const router = require("express").Router();
const mongoose = require("mongoose");
const moment = require("moment");

const Client = require("../model/Client");
const User = require("../model/User");

const getStatus = (client) =>
  client.events
    .filter((event) => event.eventType == "status_changed")
    .reverse()[0].value;

router.get("/", async (req, res) => {
  const client = await Client.find({ created_by: req.userId }).map(
    (clients) => {
      return clients
        .map((client) => {
          const status = getStatus(client);
          if (status) return { ...client.toJSON(), status };
          else return { ...client.toJSON(), status: "" };
        })
        .sort((a, b) => moment(b.updatedAt).subtract(a.updatedAt));
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
      if (req.body.redirect) res.redirect(req.body.redirect);
      else res.json(client);
    })
    .catch((err) => res.status(400).send(err));
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).send("Client not found");
    return;
  }

  const client = await Client.findOne({ _id: id, created_by: req.userId });
  const status = client.events
    .filter((event) => event.eventType == "status_changed")
    .reverse()[0];

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

router.patch("/:id", async (req, res) => {
  const id = req.params.id;

  const result = await Client.findByIdAndUpdate(id, req.body);
  res.send(result);
});

router.post("/:id/events", async (req, res) => {
  const id = req.params.id;

  const client = await Client.findById(id);

  if (getStatus(client) !== req.body.value) {
    client.events.push({ ...req.body });
    await client.save();
  }

  if (req.body.redirect) res.redirect(req.body.redirect);
  else res.json(client);
});

/**
 * Delete many clients
 *
 * Body should contain array of id strings
 */
router.delete("/", async (req, res) => {
  console.debug(req);
  if (!(req.body instanceof Array)) {
    return res
      .status(400)
      .send("Body must contain array of indices but got: " + req.body);
  }
  res.send(await Client.remove({ _id: req.body }));
});

module.exports = router;
