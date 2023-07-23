const express = require('express');
const router = express.Router();
const productController = require('../controllers/products.controller')

router.get('/products', productController.getProductsInStock)
router.get('/price/:user_id/:product_brand/:product_name', productController.getProductSpecialPrice)

module.exports = router;