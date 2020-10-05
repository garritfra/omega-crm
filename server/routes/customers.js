const router = require("express").Router();

const Customer = require("../model/Customer");

router.get("/", async (req, res) => {
  const customer = await Customer.find();
  res.json(customer);
});

router.post("/", async (req, res) => {
  console.log("POSTing customer");
  const { name } = req.body;

  const customer = new Customer({ name });
  const savedCustomer = await customer.save();
  res.json(savedCustomer);
});

module.exports = router;
