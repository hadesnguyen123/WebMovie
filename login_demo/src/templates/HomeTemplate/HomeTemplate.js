import React from 'react'
import Login from '../../page/Login/Login'
import LoginForm from '../../components/HOC/LoginForm'

export default function HomeTemplate(props) {

    const { Component, ...restParam } = props
    return <Route path={restParam.path} element={
        <>
            <Login />
        </>
    } />

}
