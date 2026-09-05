import React, { useState } from 'react'
import { Link } from 'react-router'

const UserLandingPage = () => {
    const [isLoaded, setIsLoaded] = useState(false)

    return (
        <div className="container">
            <div className="row min-vh-100 align-items-center justify-content-center">
                <div className="col-md-7 text-center">

                    <div className="card shadow border-0 p-5">
                        <div className="fs-1 mb-3 overflow-hidden d-inline-block">
                            <img  width={200}  height={150}  src="https://i.pinimg.com/736x/e2/1e/2a/e21e2ac9168a0237ee860cb3702fe0d0.jpg"  alt="Landing page banner"  loading="lazy"  onLoad={() => setIsLoaded(true)} style={{  filter: isLoaded ? 'blur(0px)' : 'blur(20px)', scale: isLoaded ? '1' : '1.05',  transition: 'filter 0.5s ease-out, transform 0.5s ease-out'}} />
                        </div>

                        <h1 className="fw-bold"> Welcome Back!</h1>

                        <p className="text-muted mt-3 mb-4">Test your knowledge, challenge yourself,and improve your skills with our quizzes.</p>

                        <Link  to="/user/quizsection"  className="btn btn-primary btn-lg">
                            Start Quiz
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UserLandingPage