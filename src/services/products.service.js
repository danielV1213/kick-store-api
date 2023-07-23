const db = require('../configs/db.configs')
const mongoose = require('mongoose')
const Product = mongoose.model('products')

async function getProductsInStock() {
    let message = ''
    try {
        const products = await Product.find({ enStock: true });
        if (!products) {
            message = 'Cannot find the products.'
            return message
        } else {
            return products
        }
    } catch (err) {
        console.log(err);
        message = `Error while retrieving the products: ${err}`;
        return message;
    }
}

async function getProductSpecialPrice(user_id, product_brand, product_name) {
    let message = ''
    try {
        const product = await Product.findOne({ brand: product_brand, name: product_name });
        if (!product) {
            message = 'Product not found.'
            return message
        }

        if (product.specialPrices && product.specialPrices[user_id]) {
            const specialPrice = product.specialPrices[user_id]
            return specialPrice
        }
        const basePrice = product.price
        return basePrice

    } catch (err) {
        console.log(err)
        message = `Error while retrieving the product: ${err}`;
        return message
    }
}

module.exports = {
    getProductsInStock,
    getProductSpecialPrice
}