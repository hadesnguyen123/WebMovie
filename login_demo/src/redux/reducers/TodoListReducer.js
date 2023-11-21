//rxreducer
import { GET_TASK_API } from "../constrains/TodoListConst"

const initialState = {
    taskList: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TASK_API:
            console.log(action)
            return { ...state, taskList: action.taskList }
        default:
            return state
    }
}


