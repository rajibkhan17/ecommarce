const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please enter your name'],
        maxlength: [30, 'your name cannot exceed 30 characters']
    },
    email: {
        type: String,
        required: [true, 'please enter your email'],
        unique: true,
        validate: [validator.isEmail, 'please enter your valid email address']
    },
    password: {
        type: String,
        required: [true, 'please enter your password'],
        minlength: [6, 'your password must be longer than 6 chracters'],
        select: false
    },
    avatar: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    role: {
        type: String,
        default: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date

})

//Entrypting password before saving 
userSchema.pre('save', async function (next){
    if(!this.isDirectModified('password')){
        next()
    }

    this.password = await bcrypt.hash(this.password, 10)
})


module.exports = mongoose.model('User', userSchema);