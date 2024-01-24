const express = require('express')


const { allUser, loginUser, signupUser } = require('../controllers/userController')

const router = express.Router()


router.get('/users', allUser)

router.post('/login', loginUser)


router.post('/signup', signupUser)

module.exports = router