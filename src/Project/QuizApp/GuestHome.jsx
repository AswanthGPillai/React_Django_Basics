import React from 'react'
import { Link, Outlet } from 'react-router'

const GuestHome = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        Quiz App
                    </Link>

                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link" to="/">
                            Home
                        </Link>

                        <Link className="nav-link" to="/login">
                            Login
                        </Link>

                        <Link className="nav-link" to="/register">
                            Register
                        </Link>
                    </div>
                </div>
            </nav>

            <Outlet />
        </div>
    )
}

export default GuestHome