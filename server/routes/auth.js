const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = require("express").Router();
const User = require("../model/User");

router.post("/register", async (req, res) => {
  const { email, full_name, password } = req.body;
  console.debug("Registering user:", email);

  if (await User.findOne({ email })) {
    res.status(400).send("Email already taken");
    return;
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = new User({ email, full_name, password: hashedPassword });

  user
    .save()
    .then((user) => {
      user.password = undefined;
      res.status(201).json(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.post("/login", async (req, res) => {
  console.debug("New login attempt:", req.body.email);
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    console.debug("User not found");
    return res.status(400).send("Email or password incorrect");
  }

  const validPass = await bcrypt.compare(password, user.password);
  if (!validPass) return res.status(400).send("Email or password incorrect");

  const token = jwt.sign({ _id: user.id }, process.env.AUTH_SECRET);

  console.debug("Login success for userId:", user.id);
  res.json({ status: "success", token, id: user.id });
});

router.get("/profile", async (req, res) => {
  console.debug("Fetching profile for:", req.userId);
  let user = await User.findOne({ _id: req.userId });
  user.password = undefined;
  return res.json(user);
});

module.exports = router;
