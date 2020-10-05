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

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  const result = await Customer.findById(id);
  res.send(result);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const result = await Customer.deleteOne({ _id: id });
  res.send(result);
});

module.exports = router;
