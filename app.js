require("dotenv").config();
const express = require('express')
const app = express();
app.use(express.json());

const productsRouter = require('./src/routes/products.route')
app.use('/products-request', productsRouter)

module.exports = app