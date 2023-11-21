import Axios from "axios"
import { DOMAIN } from "../util/constants/settingSystem"

class TodoListService {

    constructor() { }

    getTaskApi = () => {
        return Axios({
            url: `${DOMAIN}/todolists/getAllTask`,
            method: 'GET'
        })
    }

    addTaskApi = (taskName) => {
        return Axios({
            url: `${DOMAIN}/todolists/addTask`,
            method: 'POST',
            data: { taskName: taskName }
        })
    }

    rejectTaskApi = async (taskName) => {
        return await Axios({
            url: `${DOMAIN}/todolists/rejectTask?taskName=${taskName}`,
            method: 'PUT'
        })
    }

    doneTaskApi = async (taskName) => {
        return await Axios({
            url: `${DOMAIN}/todolists/doneTask?taskName=${taskName}`,
            method: 'PUT'
        })
    }

    deleteTaskApi = async (taskName) => {
        return await Axios({
            url: `${DOMAIN}/todolists/deleteTask?taskName=${taskName}`,
            method: 'DELETE'
        })
    }
}

export const toDoListService = new TodoListService()