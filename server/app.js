const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const app = express();

app.use(require("body-parser").json());

app.use(require("cors")());

// Authorization middleware
app.use((req, res, next) => {
  if (req.path === "/auth/register" || req.path === "/auth/login")
    return next();

  const authHeader = req.header("Authorization");
  if ((authHeader || "").split(" ")[0] !== "Bearer")
    return res.status(401).send("Invalid token");

  const token = authHeader.replace("Bearer ", "");

  if (!token) return res.status(401).send("Invalid token");

  try {
    const verified = jwt.verify(token, process.env.AUTH_SECRET);
    req.userId = verified._id;
    next();
  } catch (err) {
    res.status(401).json(err);
  }
});

mongoose
  .connect("mongodb://root:example@localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected"))
  .catch(console.error);

app.use("/auth", require("./routes/auth"));
app.use("/clients", require("./routes/clients"));
app.use("/users", require("./routes/users"));

app.listen(8080);
