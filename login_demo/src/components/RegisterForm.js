import React from 'react'

export default function RegisterForm() {
    return (
        <div>
            <h1>This is Register form</h1>
            <div className="mb-3">
                <label htmlFor className="form-label">Name</label>
                <input type="text" className="form-control" name id aria-describedby="helpId" placeholder />
                <small id="helpId" className="form-text text-muted">Help text</small>
            </div>
        </div>
    )
}
