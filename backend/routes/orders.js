const { Router } = require("express");
const mongoose = require("mongoose");

const Orders = require("../models/Orders");

const router = Router();

router.post("/", async (req, res) => {
  try {
    const newOrder = new Orders({ products: req.body });
    const orderedProduct = await newOrder.save();
    res.status(200).send(orderedProduct);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

module.exports = router;
