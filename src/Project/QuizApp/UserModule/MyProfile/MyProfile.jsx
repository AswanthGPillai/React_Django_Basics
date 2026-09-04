import React from 'react'
import { Link } from 'react-router'

const MyProfile = () => {
    const storage = JSON.parse(sessionStorage.getItem('user'))
    
    
    return (
        <div className="container">
            <div className="row min-vh-100 align-items-center justify-content-center">
                <div className="col-md-7 text-center">

                    <div className="card shadow border-0 p-5">

                        <div className="mb-4">
                        </div>

                        <h1 className="fw-bold">
                            My Profile
                        </h1>

                        <p className="text-muted mt-3 mb-4">
                            Manage your profile and view your account details.
                        </p>

                        <div className="text-start">

                            <div className="mb-3">
                                <label className="text-muted">
                                    Name
                                </label>
                                <h5>{storage.name}</h5>
                            </div>

                            <div className="mb-3">
                                <label className="text-muted">
                                    Email
                                </label>
                                <h5>{storage.email}</h5>
                            </div>


                        </div>

                       <div className='d-flex gap-5 justify-content-center'>
                            <Link to='/user/editprofile'>
                                <button className="btn btn-primary btn-lg mt-3">
                                    Edit Profile
                                </button>
                            </Link>
                            <Link  to='/user/changepassword'>
                                <button className="btn btn-primary btn-lg mt-3">
                                    Change Password
                                </button>
                            </Link>
                       </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default MyProfile