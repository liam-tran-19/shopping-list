const mongoose = require('mongoose');
const cors = require('cors')
const bodyParser = require('body-parser')
const config = require('./config');
const express = require("express");

const ProductsRoutes = require("../backend/routes/products")
const OrderRoutes = require("../backend/routes/orders")

const { MONGO_DB_NAME } = config;

const app = express();

// CORS Middleware
app.use(cors());

// Bodyparser Middleware
app.use(bodyParser.json());

app.use(express.json());

// Use Routes
app.use('/api/products', ProductsRoutes);
app.use('/api/orders', OrderRoutes);

mongoose
  .connect(MONGO_DB_NAME, {
    useNewUrlParser: true
  }) 
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err));

  module.exports = app;