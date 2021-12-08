const { Schema, model } = require("mongoose");
const shortid = require("shortid");

const ProductsSchema = new Schema({
  _id: {
    type: String,
    default: shortid.generate,
  },
  productName: String,
  price: Number,
});

const Product = model("products", ProductsSchema);

module.exports = Product;
