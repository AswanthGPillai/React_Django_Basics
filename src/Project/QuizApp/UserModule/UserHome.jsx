import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router'

const UserHome = () => {
    const navigate = useNavigate()
    const storage = JSON.parse(sessionStorage.getItem('user'))

    const handleLogOut = () => {
        const userdata = {
            ...storage,
            login: false
        }
        sessionStorage.setItem('user', JSON.stringify(userdata))
        alert(`Welcome to Quiz App, ${storage.name}`)
        navigate('/')
    }

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        Quiz App
                    </Link>

                    <span className="navbar-text text-white">
                        Welcome {storage.name}
                    </span>


                    <div>
                        <Link to="/user" className="btn btn-light me-2">
                            Home
                        </Link>
                        <Link className="btn btn-outline-info me-2" to="/user/myprofile">
                            My Profile
                        </Link>
                        <button className="btn btn-outline-danger" onClick={handleLogOut}>
                            Logout
                        </button>



                    </div>
                </div>
            </nav>

            <main className="container mt-4">
                <Outlet />
            </main>
        </div>
    )
}

export default UserHome