const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const User = require('../models/user');
const ErrorHandler = require('../utils/errorHandler');


//register a user ==>api/v1/register
exports.registerUser = catchAsyncErrors( async (req, res, next) => {
    const { name, email, password } = req.body;
    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: 'asdfkjl',
            url: 'asdf'
        }
    })
    res.status(201).json({
        success: true,
        user
    })
})
