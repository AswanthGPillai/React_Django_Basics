import React from 'react'
import { Route, Routes } from 'react-router'
import GuestHome from './GuestHome'
import Login from './Login'
import Register from './Register'
import GuestLandingPage from './GuestLandingPage'
import UserHome from './UserModule/UserHome'
import QuizSection from './UserModule/QuizSection'
import ProtectedRoute from './ProtectedRoute'
import UserLandingPage from './UserModule/UserLandingPage'
import MyProfile from './UserModule/MyProfile/MyProfile'
import ChangePassword from './UserModule/MyProfile/ChangePassword'
import EditProfile from './UserModule/MyProfile/EditProfile'

const QuizMainRoute = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<GuestHome />}>
                    <Route index element={<GuestLandingPage />} />
                    <Route path='login' element={<Login />} />
                    <Route path='register' element={<Register />} />
                </Route>
                <Route element={<ProtectedRoute />}>
                    <Route path="/user" element={<UserHome />}>
                        <Route index element={<UserLandingPage />} />
                        <Route path='myprofile' element={<MyProfile />} />
                        <Route path='changepassword' element={<ChangePassword />} />
                        <Route path='editprofile' element={<EditProfile />} />
                        <Route path='quizsection' element={<QuizSection />} />
                    </Route>
                </Route>
            </Routes>
        </div>
    )
}

export default QuizMainRoute