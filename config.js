// config.js
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({
  // path: path.resolve(__dirname, process.env.NODE_ENV + '.env')
  path: path.resolve(__dirname, '.env')
});
module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  HOST: process.env.HOST || '127.0.0.1',
  PORT: process.env.PORT || 3000,
  MONGO_DB_NAME: process.env.MONGO_DB_NAME || 'sample',
  MONGO_DB_HOST: process.env.MONGO_DB_HOST || '127.0.0.1'
}