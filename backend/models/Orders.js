const { Schema, model } = require("mongoose");
const shortid = require("shortid");

const OrdersSchema = new Schema({
  _id: {
    type: String,
    default: shortid.generate,
  },
  products: [
    {
      productId: String,
      quantity: Number,
    },
  ],
  orderDate: {
    type: Date,
    default: Date.now,
  },
});

const Orders = model("orders", OrdersSchema);

module.exports = Orders;
