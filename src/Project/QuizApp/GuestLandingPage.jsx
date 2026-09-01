import React from 'react'
import { Link } from 'react-router'

const GuestLandingPage = () => {
    return (
        <div className="container">
            <div className="row min-vh-100 align-items-center">
                <div className="col-md-6">
                    <h1 className="display-4 fw-bold">
                        Welcome to Quiz App
                    </h1>

                    <p className="lead text-muted mt-3">
                        Test your knowledge, improve your skills, and have fun
                        with our interactive quizzes.
                    </p>

                    <div className="mt-4">
                        <Link to="/register" className="btn btn-primary me-2">
                            Get Started
                        </Link>

                        <Link to="/login" className="btn btn-outline-primary">
                            Login
                        </Link>
                    </div>
                </div>

                <div className="col-md-6 text-center">
                    <div className="card shadow border-0 p-5">
                        <h2>🧠</h2>
                        <h3 className="mt-3">Challenge Yourself</h3>
                        <p className="text-muted mb-0">
                            Join now and start taking quizzes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GuestLandingPage