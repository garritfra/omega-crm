const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("Landing");
});

module.exports = router;
