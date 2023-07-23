const productServices = require('../services/products.service')

async function getProductsInStock(req, res, next) {
    try {
        const data = await productServices.getProductsInStock()
        if (data == 'Cannot find the products.') {
            res.status(500).json({ status: 'error', message: data })
        } else {
            res.status(200).json({ status: 'ok', data: data })
        }
    } catch (err) {
        res.status(500).json({ status: "error", message: `Error while retrieving all products: ${err}` });
        next(err)
    }
};

// Last controller here:
const getProductSpecialPrice = async (req, res, next) => {
    const { user_id, product_brand, product_name } = req.params;

    try {
        // Find the product by its name
        const data = await productServices.getProductSpecialPrice(user_id, product_brand, product_name)
        if (data == 'Product not found.') {
            res.status(404).json({ status: 'error', message: data })
        } else {
            res.status(200).json({ status: 'ok', data: data })
        }

    } catch (err) {
        res.status(500).json({ error: 'Server Error' });
    }
};

module.exports = {
    getProductsInStock,
    getProductSpecialPrice
}