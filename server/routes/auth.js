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

  const result = await user
    .save()
    .then((user) => {
      user.password = undefined;
    })
    .catch((err) => {
      console.log(err);
    });

  if (req.query.redirect) return res.redirect(req.query.redirect);
  else return res.json({ status: "success", token, id: result.id });
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

  const token = jwt.sign(
    { _id: user.id, name: user.full_name, email: user.email },
    process.env.AUTH_SECRET
  );

  console.debug("Login success for userId:", user.id);
  if (req.query.redirect)
    return res.cookie("token", token).redirect(req.query.redirect);
  else return res.json({ status: "success", token, id: user.id });
});

router.get("/profile", async (req, res) => {
  console.debug("Fetching profile for:", req.userId);
  let user = await User.findOne({ _id: req.userId });

  if (user) {
    user.password = undefined;
    return res.json(user);
  } else {
    const message = "User not found";
    console.debug(message);
    return res.status(404).send(message);
  }
});

module.exports = router;
