const express = require('express');
const { signup, login, getAllUser } = require('../controllers/user.controllerr');

const userRouter = express.Router()
userRouter.post("/signup", signup)
userRouter.post("/login", login)
userRouter.get("/all", getAllUser)

module.exports = userRouter

