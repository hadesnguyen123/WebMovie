const express = require('express');
const userRouter = require('./user.router');
const todolistRouter = require('./todolist.router');

const rootRouter = express.Router()
rootRouter.use('/users', userRouter)
rootRouter.use('/todolists', todolistRouter)

module.exports = rootRouter