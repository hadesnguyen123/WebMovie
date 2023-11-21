const express = require('express');
const { getAllTask, addTask, rejectTask, doneTask, deleteTask } = require('../controllers/todolist.controller');

const todolistRouter = express.Router()

todolistRouter.get("/getAllTask", getAllTask)
todolistRouter.post("/addTask", addTask)
todolistRouter.put("/rejectTask", rejectTask)
todolistRouter.put("/doneTask", doneTask)
todolistRouter.delete("/deleteTask", deleteTask)


module.exports = todolistRouter