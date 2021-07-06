const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please enter product name'],
        trim: true,
        maxlength: [100, 'product name can not exceed 100 characters']
    },
    price: {
        type: Number,
        required: [true, 'please enter product price'],
        maxlength: [100, 'product name can not exceed 5 characters'],
        default: 0.0
    },
    description: {
        type: String,
        required: [true, 'please enter product description'],
    },
    ratings: {
        type: Number,
        default: 0
    },
    image: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
        }
    ],
    category: {
        type: String,
        required: [true, 'please enter product category'],
        enum: {
            values: [
                'Electronices',
                'Camera',
                'Laptops',
                'Accessories',
                'Headphones',
                'Food',
                'Books',
                'Clothes/shoes',
                'Beauty/health',
                'Sports',
                'Outdoor',
                'Home'
            ],
            message: 'please select prodect catagory'
        }
    },
    seller: {
        type: String,
        required: [true, 'please enter saller name']
    },
    stock: {
        type: Number,
        required: [true, 'please enter product stock'],
        maxlength: [5, 'product name can not exceed 5 characters']
    },
    numofReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            Comment: {
                type: String,
                required: true
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }

})


module.exports = mongoose.model('Product', productSchema);