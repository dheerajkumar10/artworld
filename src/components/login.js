import React, { useState } from 'react'
import Register from './register'

export const Login = () => {
    const [id, setId] = useState(null)
    const [password, setPassword] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(id)
        console.log(password)

        //call api with this id and password and redirect to user page with specific id
    }

    return (
        <div>
            <div>Enter Credentials</div>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setId(e.target.value)} value={id} type="text" placeholder='id'></input>
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder='password'></input>
                <button type='submit'>Login</button>
            </form>
            <div>still not registerd ? </div>
            <Register></Register>
        </div>
    )
}
