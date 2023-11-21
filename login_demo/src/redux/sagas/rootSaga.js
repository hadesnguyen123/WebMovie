import { all } from 'redux-saga/effects'
import * as TodoListSaga from './TodoListSaga'



export function* rootSaga() {
    yield all([
        TodoListSaga.followGetTaskAction(),
        TodoListSaga.followAddTaskAction(),
        TodoListSaga.followDoneTaskAction(),
        TodoListSaga.followRejectTaskAction(),
        TodoListSaga.followDeleteTaskAction()
    ])
}