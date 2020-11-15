const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("Index", { user: req.user });
});

module.exports = router;
