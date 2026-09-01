import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()


    const handleSubmit = () => {
        if (sessionStorage.getItem('')) {
            alert("Please Register")
        } else {

            // getItem() takes 1 parameter:  sessionStorage.getItem(key)
            const storage = JSON.parse(sessionStorage.getItem('user'))
            if (email == storage.email && password == storage.password) {

                alert(`Welcome to Quiz App, ${storage.name}`)
                navigate('/user')
            } else {

                alert(`Provide correct Credentails`)

            }



        }
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5">
                    <div className="card shadow">
                        <div className="card-body p-4">
                            <h2 className="text-center mb-4">Login</h2>

                            <form>
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
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login