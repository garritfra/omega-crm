const router = require("express").Router();

const Customer = require("../model/Customer");
const User = require("../model/User");

router.get("/", async (req, res) => {
  const customer = await Customer.find();
  res.json(customer);
});

router.post("/", async (req, res) => {
  console.log("POSTing customer");
  const { name, created_by } = req.body;

  const customer = new Customer({ name, created_by });
  await customer
    .save()
    .then(async (customer) => {
      const user = await User.findById(created_by);
      user.customers.push(customer.id);
      user.save();
      return customer;
    })
    .then((customer) => {
      res.json(customer);
    })
    .catch((err) => res.status(400).send(err));
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
