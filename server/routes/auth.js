const bcrypt = require("bcryptjs");

const router = require("express").Router();
const User = require("../model/User");

router.post("/register", async (req, res) => {
  const { email, full_name, password } = req.body;

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
      res.status(201).json({ id: user._id, email: user.email });
    })
    .catch((err) => res.status(400).json(err));
});

router.get("/login", async (req, res) => {});

module.exports = router;
