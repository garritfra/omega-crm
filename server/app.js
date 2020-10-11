const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(require("body-parser").json());

app.use(require("cors")());

mongoose
  .connect("mongodb://root:example@localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected"))
  .catch(console.error);

app.use("/clients", require("./routes/clients"));
app.use("/users", require("./routes/users"));

app.listen(8080);
