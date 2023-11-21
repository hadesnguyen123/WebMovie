import { combineReducers, createStore, applyMiddleware } from "redux"
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

//middleware
import reduxThunk from 'redux-thunk'
import createMiddleWareSaga from 'redux-saga'
import { rootSaga } from "./sagas/rootSaga"
import TodoListReducer from "./reducers/TodoListReducer"
import ModalReducer from "./reducers/ModalReducer"

const middleWareSaga = createMiddleWareSaga();

const rootReducer = combineReducers({
    TodoListReducer,
    ModalReducer
})
const store = createStore(rootReducer, applyMiddleware(reduxThunk, middleWareSaga)) //dispatcch lên action là function
//run saga sau khi đã thêm vào store middleware
middleWareSaga.run(rootSaga)

export default store

//config sử dụng configureStore của redux toolkit
// const store = configureStore({
//     reducer: {
//         TodoListReducer
//     }
// })
