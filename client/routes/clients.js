const router = require("express").Router();
const axios = require("axios");

const basePath = process.env.API_BASE_PATH;

router.get("/", async (req, res) => {
  const clients = await axios
    .get(basePath + "/clients", {
      headers: { Authorization: "Bearer " + req.token },
    })
    .then((response) => response.data)
    .then((clients) =>
      clients.map((c) => {
        return { ...c, id: c._id };
      })
    );

  res.render("clients/Index", {
    clients,
  });
});

module.exports = router;
