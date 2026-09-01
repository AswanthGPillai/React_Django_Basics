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
                        <Route path='quizsection' element={<QuizSection />} />
                    </Route>
                </Route>
            </Routes>
        </div>
    )
}

export default QuizMainRoute