import React, { useState } from 'react'

const ChangePassword = () => {

    const storage = JSON.parse(sessionStorage.getItem('user'))

    const [oldPassword,setOldPassword] = useState('')
    const [newPassword,setNewPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')

    const handleSubmit = () =>{
        if(storage.password == oldPassword){
            if(newPassword == confirmPassword){
                const userdata = {
                    ...storage,
                    password:newPassword
                }

                const user = JSON.stringify(userdata)
                sessionStorage.setItem('user',user)
                alert('Password Changed Successfully...')
            }else{
                alert('new Password and confirm Password Mismatch')
            }
        }else{
            alert('Old Password is Incorrect...')
        }
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
                                    Change Password
                                </h2>

                                <p className="text-muted mb-0">
                                    Update your password to keep your account secure.
                                </p>

                            </div>

                            {/* Old Password */}
                            <div className="mb-4">
                                <label className="form-label fw-semibold">
                                    Old Password
                                </label>

                                <input  type="password"  className="form-control form-control-lg rounded-3"  placeholder="Enter old password"  onChange={(e)=>setOldPassword(e.target.value)}/>
                            </div>

                            {/* New Password */}
                            <div className="mb-4">
                                <label className="form-label fw-semibold">
                                    New Password
                                </label>

                                <input  type="password"  className="form-control form-control-lg rounded-3"  placeholder="Enter new password"  onChange={(e)=>setNewPassword(e.target.value)}/>
                            </div>

                            {/* Confirm Password */}
                            <div className="mb-4">
                                <label className="form-label fw-semibold">
                                    Confirm Password
                                </label>

                                <input    type="password"    className="form-control form-control-lg rounded-3"    placeholder="Confirm new password"onChange={(e)=>setConfirmPassword(e.target.value)}/>
                            </div>

                            {/* Button */}
                            <button  type="button"  className="btn btn-primary btn-lg w-100 rounded-3" onClick={handleSubmit}>
                                Change Password
                            </button>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ChangePassword