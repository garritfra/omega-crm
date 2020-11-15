const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require("express-form-data").parse());

app.use(require("cors")());

app.use((req, res, next) => {
  console.log(req.query);
  req.body = { ...req.body, ...req.query };
  next();
});

// Logging Middleware
app.use((req, res, next) => {
  console.log(new Date().toUTCString(), req.method, req.path);
  next();
});

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
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected"))
  .catch(console.error);

app.use("/auth", require("./routes/auth"));
app.use("/clients", require("./routes/clients"));
app.use("/users", require("./routes/users"));

app.listen(8080);
