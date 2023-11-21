/*
    redux gồm 2 loại action:
    action => trả về object (action thường)
    action => function (thường dùng để xử lý api hoặc gọi các action khác) => dùng middleware
*/
import { take, fork, takeEvery, takeLatest, call, put } from 'redux-saga/effects'
import { ADD_TASK_API_ACTION, DELETE_TASK_API_ACTION, DONE_TASK_API_ACTION, GET_TASK_API, GET_TASK_API_ACTION, REJECT_TASK_API_ACTION } from '../constrains/TodoListConst'
import { toDoListService } from '../../services/TodoListService'
import { STATUS_CODE } from '../../util/constants/settingSystem'

//take: theo dõi action -> xem action nào dispatch mới làm công việc dưới
// Sử dụng iterator function

/*GET TASK*/
function* getTaskApiAction(action) {
    try {
        const { data } = yield call(() => {
            return toDoListService.getTaskApi()
        })
        console.log(data)
        //lấy giá trị thành công dùng put (giống dispatch bên thunk)
        yield put({
            type: GET_TASK_API,
            taskList: data
        })
    } catch (error) {
        console.log(error)
    }
}

export function* followGetTaskAction() {
    yield takeLatest(GET_TASK_API_ACTION, getTaskApiAction)   //cơ chế non-blocking chạy ko cần chờ
}


/*ADD TASK*/
function* addTaskApiAction(action) {
    const { taskName } = action
    console.log('TaskName:', taskName)
    try {
        const { data, status } = yield call(() => {
            return toDoListService.addTaskApi(taskName)
        })
        console.log(status)
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_TASK_API_ACTION   //đẩy lên action saga
            })
        }
    } catch (error) {
        console.log(error)
    }
}
export function* followAddTaskAction() {
    yield takeLatest(ADD_TASK_API_ACTION, addTaskApiAction)   //cơ chế non-blocking chạy ko cần chờ
}

/*DONE TASK*/
function* doneTaskApiAction(action) {
    const { taskName } = action
    try {
        const { data, status } = yield call(() => {
            return toDoListService.doneTaskApi(taskName)
        })
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_TASK_API_ACTION   //đẩy lên action saga
            })
        }
    } catch (error) {
        console.log(error)
    }
}
export function* followDoneTaskAction() {
    yield takeLatest(DONE_TASK_API_ACTION, doneTaskApiAction)   //cơ chế non-blocking chạy ko cần chờ
}

/*REJECT TASK*/
function* rejectTaskApiAction(action) {
    const { taskName } = action
    try {
        const { data, status } = yield call(() => {
            return toDoListService.rejectTaskApi(taskName)
        })
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_TASK_API_ACTION   //đẩy lên action saga
            })
        }
    } catch (error) {
        console.log(error)
    }
}
export function* followRejectTaskAction() {
    yield takeLatest(REJECT_TASK_API_ACTION, rejectTaskApiAction)   //cơ chế non-blocking chạy ko cần chờ
}

/*DELETE TASK*/

function* deleteTaskApiAction(action) {
    const { taskName } = action
    try {
        const { data, status } = yield call(() => {
            return toDoListService.deleteTaskApi(taskName)
        })
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_TASK_API_ACTION   //đẩy lên action saga
            })
        }
    } catch (error) {
        console.log(error)
    }
}
export function* followDeleteTaskAction() {
    yield takeLatest(DELETE_TASK_API_ACTION, deleteTaskApiAction)   //cơ chế non-blocking chạy ko cần chờ
}

