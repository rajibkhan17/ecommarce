const express = require('express');
const router = express.Router();

//register route
const { registerUser } = require('../controllers/authController');
router.route('/register').post(registerUser);




module.exports = router