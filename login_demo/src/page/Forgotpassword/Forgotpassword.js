import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Forgotpassword() {
    return (
        <div className='login'>
            <div className='container text-center bg-white' style={{ maxWidth: 500 }}>
                <div className='login__content'>
                    <img style={{ width: 70, height: 70 }} className='mt-4 mb-4' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfD6hJRRPtSWSpotPS1LhuFTTl_rc_GUYHC42ToA26zKV8pRnWIlI1h7AWt5n-Sv4g-hg&usqp=CAU'></img>
                    <h3>Forgot password</h3>
                    <p className='mt-3'>Enter your email address bolow and we'll send you password reset OTP</p>
                    <form>
                        <div className="mb-3 form-group">
                            <input type="email" name='email' className="form-control" placeholder='Email/User' />
                        </div>
                        <button type='submit' className="btn" >Send Mail</button>
                    </form>
                    <hr className='mt-3'></hr>
                    <span className='fw-bold'><NavLink to='/login'>Already have account</NavLink></span>
                </div>
            </div>
        </div >
    )
}
