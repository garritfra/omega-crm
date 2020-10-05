const router = require("express").Router();

const User = require("../model/User");

router.get("/", async (req, res) => {
  const user = await User.find();
  res.json(user);
});

router.post("/", async (req, res) => {
  console.log("POSTing user");
  const { email, full_name } = req.body;

  // Don't accept duplicate emails
  if (await User.findOne({ email })) {
    res.status(400).send("Email already taken");
    return;
  }

  const user = new User({ email, full_name });
  const savedUser = await user.save();
  res.json(savedUser);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  const result = await User.findById(id);
  res.send(result);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const result = await User.deleteOne({ _id: id });
  res.send(result);
});

module.exports = router;
