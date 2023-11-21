import React, { useState } from 'react'
import './Login.css'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

export default function Login() {

    // const [userLogin, setUserLogin] = useState({ email: '', password: '' });

    const handleLogin = (e) => {
        e.preventDefault()
        let { email, password } = e.target
        email = email.value
        password = password.value
        axios.post(`http://localhost:8080/users/login`, {
            email,
            password
        }).then(res => {
            alert(res.data)
        }).catch(error => {
            alert(error)
        })
    }

    // const sendRequest = () => {
    //     console.log(userLogin)

    // }
    return (
        <div className='login'>
            <div className='container text-center bg-white' style={{ maxWidth: 500 }}>
                <div className='login__content'>
                    <img style={{ width: 70, height: 70 }} className='mt-4 mb-4' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfD6hJRRPtSWSpotPS1LhuFTTl_rc_GUYHC42ToA26zKV8pRnWIlI1h7AWt5n-Sv4g-hg&usqp=CAU'></img>
                    <h3>Hi, Welcome Back</h3>
                    <p className='mt-3'>Enter your credentials to continue</p>
                    <form onSubmit={handleLogin}>
                        <div className="mb-3 form-group">
                            <input type="email" name='email' className="form-control" placeholder='Email/User' />
                        </div>
                        <div className="mb-3 form-group">
                            <input type="password" name='password' className="form-control" id="exampleInputPassword1" placeholder='Password' />
                        </div>
                        <div className="mb-3 form-check d-flex">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label fw-bold">Keep me logged in
                            </label>
                            <NavLink className='login__forgetpass' to='/forgotpassword'>Forget password</NavLink>
                        </div>
                        <button type='submit' className="btn" >Login</button>
                    </form>
                    <hr className='mt-3'></hr>
                    <span className='fw-bold'><NavLink to='/signup'>Don't have account</NavLink></span>
                </div>
            </div>
        </div >
    )
}
