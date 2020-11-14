const router = require("express").Router();
const axios = require("axios");

const basePath = process.env.API_BASE_PATH;

router.get("/", async (req, res) => {
  console.debug(basePath);
  const clients = await axios.get(
    basePath + "/clients",
    {},
    { headers: { Authorization: "Bearer " + req.token } }
  );
  console.log(clients);

  res.render("Clients", {
    clients: [
      { id: 1, name: "Foo Bar" },
      { id: 2, name: "Michael Jackson" },
    ],
  });
});

module.exports = router;
