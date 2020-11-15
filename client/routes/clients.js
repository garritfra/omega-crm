const router = require("express").Router();
const axios = require("axios");

const basePath = process.env.API_BASE_PATH;

router.get("/", async (req, res) => {
  const clients = await axios
    .get(basePath + "/clients", {
      headers: { Authorization: "Bearer " + req.cookies.token },
    })
    .then((response) => response.data)
    .then((clients) =>
      clients.map((c) => {
        return { ...c, id: c._id };
      })
    );

  res.render("clients/Index", {
    clients,
    user: req.user,
  });
});

router.get("/new", async (req, res) => {
  res.render("clients/New", {
    user: req.user,
  });
});

module.exports = router;
