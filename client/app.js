const express = require("express");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const https = require("https");

const app = express();

require("dotenv").config();

app.use("/", express.static(__dirname + "/public"));

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine(
  "jsx",
  require("express-react-views").createEngine({
    babel: {
      presets: [
        "@babel/preset-react",
        ["@babel/preset-env", { targets: { node: "current" } }],
      ],
    },
    plugins: ["@babel/plugin-proposal-object-rest-spread"],
  })
);

app.use(require("cookie-parser")());

// Attach user
app.use((req, res, next) => {
  const token = req.cookies.token;
  req.user = { ...jwt.decode(token), token };
  next();
});

app.use("/landing", require("./routes/landing"));
app.use("/auth", require("./routes/auth"));

// Redirect if not authenticated
app.use((req, res, next) => {
  if (!req.user.token) return res.redirect("/landing");
  next();
});

app.use("/", require("./routes/index"));
app.use("/clients", require("./routes/clients"));

app.get("/*", (req, res) => {
  res.render("404");
});

if (process.env.NODE_ENV === "production") {
  console.log("Starting server in production mode");

  const options = {
    cert: fs.readFileSync("./certs/fullchain.pem"),
    key: fs.readFileSync("./certs/privkey.pem"),
  };

  https.createServer(options, app).listen(443);
} else {
  console.log("Starting server in debug mode");
}

app.listen(process.env.PORT || 80);
