const express = require('express');
const {registerUser} = require('../controllers/userController')
const router = express.Router()

router.route('/').post(registerUser)
// router.route('/login', authUser)

module.exports = router;