const express = require('express')
const { signup, signin } = require('../controllers/userController')
const userRouter = express.Router()
const usersData = require('../data/usersData')


userRouter.post('/signup',signup)

userRouter.post('/signin',signin)

module.exports = userRouter
