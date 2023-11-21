import  Axios  from "axios";    //not {Axios}
import { GET_TASK_API } from "../constrains/TodoListConst";
import { DOMAIN } from "../../util/constants/settingSystem";


//dispatch lên action là hàm sử dụng redux thunk
export const getTaskListApi = () => {
    return async dispatch => {
        try {
            let { data, status, ...rest } = await Axios({
                url: `${DOMAIN}/todolists/getAllTask`,
                method: 'GET'
            })
            console.log(data)
            if (status === 200) {
                dispatch({
                    type: GET_TASK_API,
                    taskList: data
                })
            }
        } catch (err) {
            console.log(err)
        }
    }
}

export const addTaskApi = (taskName) => {
    return dispatch => {
        Axios({
            url: `${DOMAIN}/todolists/addTask`,
            method: 'POST',
            data: { taskName: taskName }
        }).then(result => {
            //dispatch lên để render lại list
            dispatch(getTaskListApi())
            //nếu gọi getTaskListApi sẽ ko có đc function dispatch trả về từ redux thunk
        }).catch(error => {
            alert(error.response.data)
        })
    }
}

export const rejectTaskApi = (taskName) => {
    return dispatch => {
        Axios({
            url: `${DOMAIN}/todolists/rejectTask?taskName=${taskName}`,
            method: 'PUT'
        }).then(res => {
            //dispatch lên để render lại list
            dispatch(getTaskListApi())
        }).catch(err => {
            alert(err.response.data);
        })
    }
}

export const doneTaskApi = (taskName) => {
    return dispatch => {
        Axios({
            url: `${DOMAIN}/todolists/doneTask?taskName=${taskName}`,
            method: 'PUT'
        }).then(res => {
            //dispatch lên để render lại list
            dispatch(getTaskListApi())
        }).catch(err => {
            alert(err.response.data);
        })
    }
}

export const deleteTaskApi = (taskName) => {
    return dispatch => {
        Axios({
            url: `${DOMAIN}/todolists/deleteTask?taskName=${taskName}`,
            method: 'DELETE'
        }).then(res => {
            //dispatch lên để render lại list
            dispatch(getTaskListApi())
        }).catch(err => {
            alert(err.response.data);
        })
    }
}