const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(require("body-parser").json());

const cors = require("cors")({ origin: true });
app.use(cors);

mongoose
  .connect("mongodb://root:example@localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected"))
  .catch(console.error);

app.use("/customers", require("./routes/customers"));

app.listen(8080);
