const Product = require('../models/product')

// test route : =>  /api/v1//products
exports.getProducts = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'this product show all product in database' 
    })
}

//create new product: => /api/v1/product/new
exports.newProduct = async (req, res, next) => {

    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
}