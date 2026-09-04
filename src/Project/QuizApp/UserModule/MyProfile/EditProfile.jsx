import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const EditProfile = () => {

    const storage = JSON.parse(sessionStorage.getItem('user'))

    const [name, setName] = useState(storage.name)
    const [email, setEmail] = useState(storage.email)
    const navigate = useNavigate()




    const handleSubmit = () => {
        const userdata = {
            ...storage,
            name: name,
            email: email
        }

        const user = JSON.stringify(userdata)

        sessionStorage.setItem('user', user)
        alert("Update done Successfully...")
        navigate('/user/myprofile')
    }

    return (
        <div className="container">
            <div className="row min-vh-100 align-items-center justify-content-center">

                <div className="col-md-7 col-lg-6">

                    <div className="card shadow border-0 rounded-4">
                        <div className="card-body p-4 p-md-5">

                            {/* Header */}
                            <div className="text-center mb-4">

                                <h2 className="fw-bold mb-2">
                                    Edit Profile
                                </h2>

                                <p className="text-muted mb-0">
                                    Update your personal information
                                </p>

                            </div>

                            {/* Name */}
                            <div className="mb-4">
                                <label className="form-label fw-semibold">
                                    Name
                                </label>

                                <input type="text" className="form-control form-control-lg rounded-3" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>

                            {/* Email */}
                            <div className="mb-4">
                                <label className="form-label fw-semibold">
                                    Email
                                </label>

                                <input type="email" className="form-control form-control-lg rounded-3" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            {/* Button */}
                            <button type="button" className="btn btn-primary btn-lg w-100 rounded-3" onClick={handleSubmit} >
                                Update Profile
                            </button>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default EditProfile