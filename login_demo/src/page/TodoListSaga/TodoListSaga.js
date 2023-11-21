import React, { useState, useEffect } from 'react'
import './TodoList.css'
import { useSelector, useDispatch } from 'react-redux'
import { ADD_TASK_API_ACTION, DELETE_TASK_API_ACTION, GET_TASK_API_ACTION, REJECT_TASK_API_ACTION } from '../../redux/constrains/TodoListConst'


export default function TodoListSaga() {

    const dispatch = useDispatch()
    const { taskList } = useSelector(state => state.TodoListReducer)

    let [state, setState] = useState({
        values: {
            taskName: ''
        },
        errors: {
            taskName: ''
        }
    });

    const handleChange = (e) => {
        let { value, name } = e.target
        console.log(value)
        let newValues = { ...state.values, [name]: value }
        //tên là gì sẽ ứng với value là như thế
        let newErrors = { ...state.errors }
        let regexString = /^[a-z A-Z]+$/

        if (!regexString.test(value) || value.trim() === '') {
            newErrors[name] = name + 'invalid!'
        } else {
            newErrors[name] = ''
        }
        setState({
            ...state,
            values: newValues,
            errors: newErrors
        })
    }

    const getTaskList = () => {
        dispatch({
            type: GET_TASK_API_ACTION
        })
    }

    useEffect(() => {
        getTaskList()
        return () => {
        }
    }, [])

    //Handle addtask
    const addTask = (event) => {
        event.preventDefault();
        console.log(state.values.taskName);
        if (!state.values.taskName) {
            alert("Please type the task")
            return
        }
        dispatch({
            type: ADD_TASK_API_ACTION,
            taskName: state.values.taskName
        })
    }


    //Handle rejectTask
    const rejectTask = (taskName) => {
        dispatch({
            type: REJECT_TASK_API_ACTION,
            taskName: taskName
        })
    }


    //Handle donetask
    const doneTask = (taskName) => {
        dispatch({
            type: ADD_TASK_API_ACTION,
            taskName: taskName
        })
    }


    //Handle deleteTask
    const deleteTask = (taskName) => {
        dispatch({
            type: DELETE_TASK_API_ACTION,
            taskName: taskName
        })
    }


    const renderTaskToDo = () => {
        return taskList.filter(item => !item.status).map((item, index) => {
            return <li key={index}>
                <span>{item.taskName}</span>
                <div className="buttons">
                    <button className="remove" type="button" onClick={() => {
                        deleteTask(item.taskName)
                    }}>
                        <i className="fa fa-trash-alt" />
                    </button>
                    <button type="button" className="complete" onClick={() => {
                        doneTask(item.taskName)
                    }}>
                        <i className="far fa-check-circle" />
                        <i className="fas fa-check-circle" />
                    </button>
                </div>
            </li>
        })
    }


    const renderTaskToDoDone = () => {
        return taskList.filter(item => item.status).map((item, index) => {
            return <li key={index}>
                <span>{item.taskName}</span>
                <div className="buttons">
                    <button className="remove" type="button" onClick={() => {
                        deleteTask(item.taskName)
                    }}>
                        <i className="fa fa-trash-alt" />
                    </button>
                    <button type="button" className="complete" onClick={() => {
                        rejectTask(item.taskName)
                    }}>
                        <i className="far fa-undo" />
                        <i className="fas fa-undo" />
                    </button>
                </div>
            </li>
        })
    }


    return (
        <div className="card">
            <button className='btn btn-success' onClick={() => {
                getTaskList()
            }}>Dispath action saga</button>
            <div className="card__header">
                <img src={require('./task2.png')} />
            </div>
            {/* <h2>hello!</h2> */}
            <form className="card__body" onSubmit={addTask}>
                <div className="card__content">
                    <div className="card__title">
                        <h2>My Tasks</h2>
                        <p>September 9,2023</p>
                    </div>
                    <div className="card__add">
                        <input id="newTask" name="taskName" type="text" placeholder="Enter an activity..." onChange={handleChange} />
                        <button id="addItem" type="submit" onClick={addTask}>
                            <i className="fa fa-plus" />
                        </button>
                    </div>
                    <div className="card__todo">
                        {/* Uncompleted tasks */}
                        <ul className="todo" id="todo">
                            {renderTaskToDo()}
                        </ul>
                        {/* Completed tasks */}
                        <ul className="todo" id="completed">
                            {renderTaskToDoDone()}
                        </ul>
                    </div>
                </div>
            </form>
        </div>
    )
}
