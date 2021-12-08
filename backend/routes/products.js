const { Router } = require("express");

const Product = require("../models/Products");

const router = Router();

router.get("/all-products", async (req, res) => {
  try {
    const products = await Product.find();
    if (!products) throw Error("No products");
    res.json(products);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

router.post("/", async (req, res) => {
  const { productName, price } = req.body;
  if (!productName || !price) {
    return res.status(400).json({ msg: "No product created" });
  }
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(200).send(savedProduct);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

module.exports = router;
