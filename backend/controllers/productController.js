const Product = require('../models/product');
const ErrorHandler = require('../utils/errorHandler');

// get all products : =>  /api/v1//products
exports.getProducts = async (req, res, next) => {

    const products = await Product.find();

    res.status(200).json({
        success: true,
        cout : products.length,
        products
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

// get single product details => api/v1/product/id
exports.getSingleProduct = async (req, res, next) => {

    const product = await Product.findById(req.params.id)

    if(!product){
        // return res.status(404).json({
        //     success: false, 
        //     message: 'product not found'
        // })
        return next(new ErrorHandler('product not found', 400));
    }

    res.status(200).json({
        success: true, 
        product
    })
}

//Update product = > /api/v1/product/id
exports.updateProduct = async (req, res, next) => {
    let product = await Product.findById(req.params.id)
    if(!product){
        return res.status(404).json({
            success: false, 
            message: 'product not found'
        })
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        product
    })
}

//Delete Product => /api/v1/product/id
exports.deleteProduct = async (req, res, next) => {

    let product = await Product.findById(req.params.id)

    if(!product){
        return res.status(404).json({
            success: false, 
            message: 'product not found'
        })
    }    

    await Product.remove()


    res.status(200).json({
        success: true,
        message: 'Product Are Remove'
    })
}  