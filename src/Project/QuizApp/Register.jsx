import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()


    const handleSubmit = () => {
        const userData = {
            name: name,
            email: email,
            password: password,
            login:false,
        }

        const user = JSON.stringify(userData)

        // setItem() takes 2 parameters:  sessionStorage.setItem(key, value)
        sessionStorage.setItem('user', user)
        alert(`${name}'s Register Successfully Done ....`)
        navigate('/login')
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5">
                    <div className="card shadow">
                        <div className="card-body p-4">
                            <h2 className="text-center mb-4">Register</h2>

                            <form>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">
                                        Username
                                    </label>
                                    <input type="text" className="form-control" id="username" placeholder="Enter username" onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">
                                        Password
                                    </label>
                                    <input type="password" className="form-control" id="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <button type="button" className="btn btn-primary w-100" onClick={handleSubmit}>
                                    Register
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register