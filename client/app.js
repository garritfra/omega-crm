const express = require("express");

const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.use(express.static("public"));
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

app.use("/", require("./routes/index"));
app.use("/clients", require("./routes/clients"));

app.listen(process.env.PORT || 80);
