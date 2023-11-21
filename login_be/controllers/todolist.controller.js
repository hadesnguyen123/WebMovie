const arrToDo = [
    {
        id: 1,
        taskName: "Exercise",
        status: false
    },
    {
        id: 2,
        taskName: "Workout",
        status: true
    }, {
        id: 3,
        taskName: "Learn Reacjs",
        status: true
    }, {
        id: 4,
        taskName: "Learn Nodejs",
        status: true
    }, {
        id: 5,
        taskName: "Checking Task",
        status: true
    },
    {
        id: 6,
        taskName: "Running",
        status: false
    },
    {
        id: 6,
        taskName: "Play Game",
        status: false
    }
]

const addTask = (req, res) => {
    const { taskName } = req.body
    const index = arrToDo.findIndex(task => task.taskName === taskName)
    try {
        console.log(index)
        if (index === -1) {
            const id = Math.random()
            const newTask = { id, taskName, status: false }
            arrToDo.push(newTask)
            res.status(200).send('Add Success')
        }else{
            res.status(404).send("Already exist")
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const getAllTask = (req, res) => {
    try {
        res.status(200).send(arrToDo)
    } catch (error) {
        res.status(500).send("Can not get all task", error)
    }
}

const checkTask = (status) => {

}

const rejectTask = (req, res) => {
    const { taskName } = req.query //dùng query để lấy trên URL
    try {
        const task = arrToDo.find(task => task.taskName == taskName)
        console.log(task)
        if (task) {
            task.status = false
            res.status(200).send("Success")
        } else {
            res.status(404).send("Can not found")
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const doneTask = (req, res) => {
    const { taskName } = req.query
    try {
        const task = arrToDo.find(task => task.taskName == taskName)
        console.log(task)
        if (task) {
            task.status = true
            console.log(task)
            res.status(200).send("Success")
        } else {
            res.status(404).send("Can not found")
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteTask = (req, res) => {
    const { taskName } = req.query
    const index = arrToDo.findIndex(task => task.taskName === taskName)
    try {
        console.log(index)
        if (index !== -1) {
            arrToDo.splice(index,1)
            console.log(arrToDo)
            res.status(200).send("Delete Success")
        }
        res.status(404).send("Can not delete")
    } catch (error) {
        res.status(500).send("error")
        
    }
}

module.exports = {
    addTask,
    getAllTask,
    rejectTask,
    doneTask,
    deleteTask
}