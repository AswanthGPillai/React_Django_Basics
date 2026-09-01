import React from 'react'
import { Link } from 'react-router'

const UserLandingPage = () => {
    return (
        <div className="container">
            <div className="row min-vh-100 align-items-center justify-content-center">
                <div className="col-md-7 text-center">

                    <div className="card shadow border-0 p-5">
                        <div className="fs-1 mb-3">
                            <img width={200} height={150} src="https://i.pinimg.com/736x/e2/1e/2a/e21e2ac9168a0237ee860cb3702fe0d0.jpg" alt="" />
                        </div>

                        <h1 className="fw-bold">
                            Welcome Back!
                        </h1>

                        <p className="text-muted mt-3 mb-4">
                            Test your knowledge, challenge yourself,
                            and improve your skills with our quizzes.
                        </p>

                        <Link
                            to="/user/quizsection"
                            className="btn btn-primary btn-lg"
                        >
                            Start Quiz
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UserLandingPage