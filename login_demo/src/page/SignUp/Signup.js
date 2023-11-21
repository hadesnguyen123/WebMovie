import React, { useState } from 'react'
import './Signup.css'
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios'


export default function Signup() {

    // const [userRegister, setUserRegister] = useState({ email: '', password: '' });
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        let { firstname, lastname, email, password } = e.target;
        console.log(e.target)
        firstname = firstname.value
        lastname = lastname.value
        email = email.value
        password = password.value
        axios.post(`http://localhost:8080/users/signup`, {
            firstname,
            lastname,
            email,
            password
        }).then(res => {
            if (res.status == 200) {
                alert("Success Login")
                navigate('/home')
            } else {
                alert("Wrong Email or password")
            }
        }).catch(error => {
            alert(error)
        })

    }

    const handleChange = () => {

    }
    return (
        <div className='signup'>
            <div className='container text-center bg-white' style={{ maxWidth: 500 }}>
                <div className='signup__content'>
                    <img style={{ width: 70, height: 70 }} className='mt-4 mb-4' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfD6hJRRPtSWSpotPS1LhuFTTl_rc_GUYHC42ToA26zKV8pRnWIlI1h7AWt5n-Sv4g-hg&usqp=CAU'></img>
                    <h3>Sign Up</h3>
                    <p className='mt-3'>Enter your credentials to continue</p>
                    <p className='fw-bold mb-4'>Sign up with Email address</p>

                    <form onSubmit={handleSubmit}>
                        <div className='row'>
                            <div className="mb-3 col-6 ">
                                <input type="text" name='firstname' className="form-control" placeholder='First Name' onChange={handleChange} />
                                <label></label>
                            </div>
                            <div className="mb-3 col-6">
                                <input type="text" name='lastname' className="form-control" placeholder='Last Name' />
                                <label></label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <input type="email" name='email' className="form-control" placeholder='Email/User' />
                            <label></label>
                        </div>
                        <div className="mb-3">
                            <input type="password" name='password' className="form-control" placeholder='Password' />
                            <label></label>
                        </div>
                        <div className="mb-3 form-check d-flex">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label fw-bold">Agree with
                                <a href='#'> Terms & Condition</a>
                            </label>
                        </div>
                        <button type='submit' className="btn" >Sign Up</button>
                    </form>
                    <hr className='mt-3'></hr>
                    <span className='fw-bold'><NavLink to='/login'>Already have an account</NavLink></span>
                </div>
            </div>
        </div >
    )
}
