const router = require("express").Router();
const axios = require("axios");

const basePath = process.env.API_BASE_PATH;

router.get("/login", (req, res) => {
  res.render("Login");
});

router.get("/register", (req, res) => {
  res.render("Register");
});

router.get("/logout", (req, res) => {
  res.clearCookie("token").redirect("/");
});

module.exports = router;
