
exports.getProducts = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'this product show all product in database' 
    })
}