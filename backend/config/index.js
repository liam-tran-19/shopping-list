const dotenv = require('dotenv');

dotenv.config();

const config = {
  PORT: process.env.PORT,
  MONGO_DB_NAME: process.env.MONGO_DB_NAME
};

module.exports = config;

