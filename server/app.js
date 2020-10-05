const express = require("express");

const app = express();

app.use(require("body-parser").json());

const cors = require("cors")({ origin: true });
app.use(cors);

app.use("/customers", require("./routes/customers"));

app.listen(8080);
