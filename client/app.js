const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

require("dotenv").config();

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.use("/", express.static(__dirname + "/public"));
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

app.use("/landing", require("./routes/landing"));
app.use("/auth", require("./routes/auth"));

// Attach user
app.use((req, res, next) => {
  const token = req.cookies.token;
  req.user = { ...jwt.decode(token), token };
  next();
});

// Redirect if not authenticated
app.use((req, res, next) => {
  if (!req.user) res.redirect("/landing");
  next();
});

app.use("/", require("./routes/index"));
app.use("/clients", require("./routes/clients"));

app.listen(process.env.PORT || 80);
