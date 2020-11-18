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

router.get("/:id", async (req, res) => {
  const client = await axios.get(basePath + "/clients/" + req.params.id, {
    headers: { Authorization: "Bearer " + req.cookies.token },
  }).then(res => res.data);

  if (res.status === 404) {
    res.render("404");
  } else {
    res.render("clients/Detail", {user: req.user, client });
  }
});

module.exports = router;
